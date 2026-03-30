export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  content: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  fullDescription: string;
  photo: string;
  quote: string;
  contacts?: {
    phone?: string;
    email?: string;
    social?: string;
  };
}

export interface HomePageData {
  features: Feature[];
  steps: Step[];
  testimonials: Testimonial[];
  mentorBenefits: string[];
  teamMembers: TeamMember[]; // Додайте цей рядок
}
