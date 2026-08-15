export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  student?: string;
  classTitle?: string;
}

export interface ClassInfo {
  id: string;
  title: string;
  audience: string;
  schedule: string;
  description: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  handle: string;
  href: string;
  note?: string;
}

export interface NavLink {
  label: string;
  to: string;
}
