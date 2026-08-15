import React from 'react';
import { UserCircle2 } from 'lucide-react';

// Placeholder for future individual student profile/portfolio pages.
// When you're ready to build these out, each card below can link to its own
// route (e.g. /students/<name>) showcasing that student's work over time.
const StudentPages: React.FC = () => {
  return (
    <section id="students" className="py-20 px-4 md:px-8 bg-white scroll-mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-light tracking-[0.1em] text-gray-900 mb-4 uppercase">
          Student Pages
        </h2>
        <p className="text-gray-500 font-light mb-10">
          Coming soon: every enrolled student will get their own page to showcase their work
          as it grows over the semester.
        </p>

        <div className="border border-dashed border-gray-300 p-10 flex flex-col items-center gap-3 text-gray-400">
          <UserCircle2 size={40} strokeWidth={1} />
          <p className="text-sm uppercase tracking-widest">Individual student pages — coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default StudentPages;
