export interface Certification {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

export interface CertificationListProps {
  title: string;
  certifications: Certification[];
}