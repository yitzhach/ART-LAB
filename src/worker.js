// Cloudflare Worker entry point — serves the static site via the ASSETS
// binding and handles POST /api/contact by sending notification emails via
// Resend. Requires RESEND_API_KEY set as a Worker secret
// (`npx wrangler secret put RESEND_API_KEY`, or in the dashboard under
// Settings → Variables and Secrets). Never hardcode the key here.
const TO_EMAIL = 'isaac@isaacandersonart.com';
const FROM_EMAIL = 'Art Lab Studio <onboarding@resend.dev>'; // swap to a verified domain address once isaacandersonart.com is verified in Resend

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function buildEmail(data) {
  if (data.type === 'syllabus') {
    return {
      subject: 'Art Lab Studio — Syllabus Request',
      replyTo: data.email,
      html: `<p>Please send the syllabus to: <strong>${escapeHtml(data.email)}</strong></p>`,
    };
  }
  if (data.type === 'enrollment') {
    const rows = [
      ['Student name', data.studentName],
      ['Grade', data.grade],
      ['Parent / guardian', data.parentName],
      ['Email', data.email],
      ['Phone', data.phone],
      ['Casting kit add-on', data.kitIncluded ? 'Yes — $75' : 'No'],
      ['Lesson add-on', data.hasAddOn ? `${data.addOnLabel} — ${data.addOnAmount}` : 'None'],
      ['Total due today', data.totalDueToday],
    ];
    return {
      subject: `Art Lab Studio — Enrollment: ${data.studentName || 'New student'}`,
      replyTo: data.email,
      html: `<table>${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555">${escapeHtml(k)}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`).join('')}</table><p style="color:#888;font-size:12px">Payment fields are a wireframe placeholder — no charge was processed.</p>`,
    };
  }
  return { subject: 'Art Lab Studio — Website message', replyTo: undefined, html: `<pre>${escapeHtml(JSON.stringify(data, null, 2))}</pre>` };
}

async function handleContact(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return new Response(JSON.stringify({ ok: false, error: 'Email service not configured' }), { status: 500 });
  }

  const { subject, replyTo, html } = buildEmail(data);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: replyTo || undefined,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      return new Response(JSON.stringify({ ok: false, error: err }), { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'POST' && url.pathname === '/api/contact') {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
