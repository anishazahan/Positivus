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