import { StaticImageData } from "next/image";

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  company: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}


export interface Service {
  id: number;
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor: string;
  darkBackgroundColor: string;
  darkTextColor: string;
  icon: string;
  description: string;
  img: string | StaticImageData;
}


export interface TeamMember {
  id: number
  name: string
  title: string
  experience: string
  description: string
  avatar: string | StaticImageData;
}

export interface CaseStudies {
    id: number
    title: string
    description: string
    metrics: {
      organicTraffic:string
      keywordRankings: string
      leadGeneration:  string
    }
    details:string | null
}