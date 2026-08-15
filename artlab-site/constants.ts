import { GalleryImage, ClassInfo, PaymentMethod, NavLink } from './types';

// ---------------------------------------------------------------------------
// SITE CONFIG — edit this block to rebrand the site.
// ---------------------------------------------------------------------------
export const SITE = {
  name: 'Isaac Anderson Art Lab',
  shortName: 'Art Lab',
  tagline: 'Hands-on art classes for students & teachers',
  email: 'isaac@artlabclasses.com',
  instagram: 'https://instagram.com/artlabclasses',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Classes', to: '#classes' },
  { label: 'Gallery', to: '#gallery' },
  { label: 'Syllabus & Materials', to: '#syllabus' },
  { label: 'Payment', to: '#payment' },
  { label: 'Student Pages', to: '#students' },
  { label: 'Contact', to: '#contact' },
];

// Full-bleed slideshow images on the homepage hero.
// Replace with photos of the classroom / students at work.
export const HERO_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/1920/1080?random=31', title: 'Art Lab I', alt: 'Students working on an art project' },
  { id: 2, src: 'https://picsum.photos/1920/1080?random=32', title: 'Art Lab II', alt: 'Painting supplies laid out on a table' },
  { id: 3, src: 'https://picsum.photos/1920/1080?random=33', title: 'Art Lab III', alt: 'A finished student art piece' },
];

// Class offerings shown in the "Classes" section.
export const CLASSES: ClassInfo[] = [
  {
    id: 'kids-art-lab',
    title: 'Kids Art Lab',
    audience: 'Ages 6–11',
    schedule: 'Tuesdays, 4:00–5:15 PM',
    description: 'A playful introduction to drawing, painting, and mixed media. Kids explore color, shape, and story through weekly projects.',
  },
  {
    id: 'teen-studio',
    title: 'Teen Studio',
    audience: 'Ages 12–17',
    schedule: 'Thursdays, 5:30–7:00 PM',
    description: 'A portfolio-focused studio for teens developing their own style, with critique, technique workshops, and independent projects.',
  },
  {
    id: 'teacher-workshops',
    title: 'Workshops for Teachers',
    audience: 'Educators & homeschool groups',
    schedule: 'Monthly, Saturdays 10:00 AM–1:00 PM',
    description: 'Hands-on sessions for teachers looking to bring new art techniques and lesson plans into their own classrooms.',
  },
];

// Student & class work shown in the gallery lightbox.
// Swap these for real photos, and add a "student" credit when you have permission to share names.
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 101, src: 'https://picsum.photos/800/800?random=40', title: 'Watercolor Study', alt: 'Student watercolor painting', classTitle: 'Kids Art Lab' },
  { id: 102, src: 'https://picsum.photos/800/800?random=41', title: 'Self Portrait', alt: 'Student self portrait drawing', classTitle: 'Teen Studio' },
  { id: 103, src: 'https://picsum.photos/800/800?random=42', title: 'Clay Sculpture', alt: 'Student clay sculpture', classTitle: 'Kids Art Lab' },
  { id: 104, src: 'https://picsum.photos/800/800?random=43', title: 'Mixed Media Collage', alt: 'Student mixed media collage', classTitle: 'Teen Studio' },
  { id: 105, src: 'https://picsum.photos/800/800?random=44', title: 'Still Life', alt: 'Student still life painting', classTitle: 'Teacher Workshop' },
  { id: 106, src: 'https://picsum.photos/800/800?random=45', title: 'Printmaking', alt: 'Student printmaking piece', classTitle: 'Kids Art Lab' },
];

// Downloadable PDFs — replace the files in /public/downloads with the real documents.
export const DOWNLOADS = {
  syllabus: `${import.meta.env.BASE_URL}downloads/syllabus.pdf`,
  materialsList: `${import.meta.env.BASE_URL}downloads/materials-list.pdf`,
};

// Payment options shown in the "Payment" section.
// Replace the handles below with your real Venmo/Zelle/PayPal info.
export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'venmo',
    name: 'Venmo',
    handle: '@ArtLabClasses',
    href: 'https://venmo.com/u/ArtLabClasses',
    note: 'Tap to open Venmo and send payment.',
  },
  {
    id: 'zelle',
    name: 'Zelle',
    handle: 'isaac@artlabclasses.com',
    href: '',
    note: 'Send via your bank’s Zelle to this email address.',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    handle: '@ArtLabClasses',
    href: 'https://paypal.me/ArtLabClasses',
    note: 'Tap to open PayPal and send payment.',
  },
];
