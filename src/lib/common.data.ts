import { AccordionItem, Testimonial } from "@/types/common.type";

export  const navItems = [
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#cases", label: "Use Cases" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
  ];



export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director",
    company: "XYZ Corp",
  },
  {
    id: 2,
    text: "Positivus has transformed our digital marketing strategy completely. Their innovative approach and attention to detail have resulted in remarkable growth for our brand. The team's expertise and dedication are unmatched in the industry.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "Tech Solutions Inc",
  },
  {
    id: 3,
    text: "Working with Positivus has been a game-changer for our business. Their strategic insights and creative campaigns have helped us reach new audiences and achieve our marketing goals faster than we ever imagined.",
    author: "Michael Brown",
    position: "Brand Manager",
    company: "Creative Agency",
  },
  {
    id: 4,
    text: "The results speak for themselves. Since partnering with Positivus, we've seen a 300% increase in qualified leads and our conversion rates have improved dramatically. Their team truly understands our business needs.",
    author: "Emily Davis",
    position: "VP of Marketing",
    company: "Growth Co",
  },
  {
    id: 5,
    text: "Exceptional service and outstanding results. Positivus has helped us establish a strong online presence and connect with our target audience in ways we never thought possible. Highly recommended!",
    author: "David Wilson",
    position: "Founder",
    company: "Startup Hub",
  },
];

export const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content:
      "We conduct comprehensive market research and competitor analysis to develop a customized strategy that aligns with your business objectives and target audience preferences.",
  },
  {
    id: 3,
    title: "Implementation",
    content:
      "Our team executes the developed strategy with precision, implementing all planned marketing campaigns, content creation, and optimization techniques across relevant channels.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content:
      "We continuously monitor campaign performance using advanced analytics tools and make real-time adjustments to maximize ROI and achieve optimal results.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    content:
      "Regular detailed reports keep you informed about campaign progress, key metrics, and insights. We maintain transparent communication throughout the entire process.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    content:
      "Based on performance data and market changes, we continuously refine and improve strategies to ensure long-term success and sustainable growth for your business.",
  },
];