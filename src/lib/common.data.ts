import { AccordionItem, CaseStudies, Service, TeamMember, Testimonial } from "@/types/common.type";
import serviceImg1 from "../assets/images/services-img/services-1.png"
import serviceImg2 from "../assets/images/services-img/services-2.png"
import serviceImg3 from "../assets/images/services-img/services-3.png"
import serviceImg4 from "../assets/images/services-img/services-4.png"
import serviceImg5 from "../assets/images/services-img/services-5.png"
import serviceImg6 from "../assets/images/services-img/services-6.png"
import team1 from "../assets/images/teams/team-1.png"
import team2 from "../assets/images/teams/team-3.png"
import team3 from "../assets/images/teams/Picture.png"


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



export const services: Service[] = [
  {
    id: 1,
    title: "Search engine",
    subtitle: "optimization",
    backgroundColor: "bg-[#F3F3F3]",
    textColor: "text-gray-900",
    darkBackgroundColor: "dark:bg-gray-950",
    darkTextColor: "dark:text-gray-900",
    icon: "search",
    description: "Improve your website's visibility and ranking on search engines",
    img:serviceImg1
  },
  {
    id: 2,
    title: "Pay-per-click",
    subtitle: "advertising",
    backgroundColor: "bg-primary",
    textColor: "text-gray-900",
    darkBackgroundColor: "bg-lime-400",
    darkTextColor: "dark:text-gray-900",
    icon: "click",
    description: "Drive targeted traffic with strategic paid advertising campaigns",
    img:serviceImg2
  },
  {
    id: 3,
    title: "Social Media",
    subtitle: "Marketing",
    backgroundColor: "bg-dark",
    textColor: "text-white",
    darkBackgroundColor: "dark:bg-gray-800",
    darkTextColor: "dark:text-white",
    icon: "social",
    description: "Build your brand presence across social media platforms",
     img:serviceImg3
  },
  {
    id: 4,
    title: "Email",
    subtitle: "Marketing",
     backgroundColor: "bg-[#F3F3F3]",
    textColor: "text-gray-900",
    darkBackgroundColor: "dark:bg-gray-950",
    darkTextColor: "dark:text-gray-900",
    icon: "email",
    description: "Engage your audience with personalized email campaigns",
     img:serviceImg4
  },
  {
    id: 5,
    title: "Content",
    subtitle: "Creation",
    backgroundColor: "bg-primary",
    textColor: "text-gray-900",
    darkBackgroundColor: "bg-lime-400",
    darkTextColor: "dark:text-gray-900",
    icon: "content",
    description: "Create compelling content that resonates with your audience",
     img:serviceImg5
  },
  {
    id: 6,
    title: "Analytics and",
    subtitle: "Tracking",
    backgroundColor:  "bg-dark",
    textColor: "text-white",
    darkBackgroundColor: "dark:bg-gray-800",
    darkTextColor: "dark:text-white",
    icon: "analytics",
    description: "Track and analyze your marketing performance with detailed insights",
     img:serviceImg6
  }
];





export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    title: "CEO and Founder",
    experience: "10+ years of experience in digital marketing",
    description: "Expertise in SEO, PPC, and content strategy",
    avatar: team1,
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Director of Operations",
    experience: "7+ years of experience in project management and team leadership",
    description: "Strong organizational and communication skills",
    avatar: team2,
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation",
    description: "Proficient in keyword research and on-page optimization",
    avatar: team3,
  },
  {
    id: 4,
    name: "Emily Johnson",
    title: "PPC Manager",
    experience: "3+ years of experience in paid search advertising",
    description: "Skilled in campaign management and performance analysis",
    avatar: team1,
  },
  {
    id: 5,
    name: "Brian Williams",
    title: "Social Media Specialist",
    experience: "4+ years of experience in social media marketing",
    description: "Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    avatar: team2,
  },
  {
    id: 6,
    name: "Sarah Kim",
    title: "Content Creator",
    experience: "2+ years of experience in writing and editing",
    description: "Skilled in creating compelling, SEO-optimized content for various industries",
    avatar: team3,
  },
   {
    id: 7,
    name: "Jane Doe",
    title: "Director of Operations",
    experience: "7+ years of experience in project management and team leadership",
    description: "Strong organizational and communication skills",
    avatar: team2,
  },
  {
    id: 8,
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation",
    description: "Proficient in keyword research and on-page optimization",
    avatar: team3,
  },
  {
    id: 9,
    name: "Emily Johnson",
    title: "PPC Manager",
    experience: "3+ years of experience in paid search advertising",
    description: "Skilled in campaign management and performance analysis",
    avatar: team1,
  },
]



export const caseStudies:CaseStudies[] = [
  {
    id: 1,
    title: "Local Restaurant Success",
    description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    details: "Our comprehensive digital marketing strategy included Google Ads optimization, local SEO improvements, social media marketing, and conversion rate optimization. We identified peak dining hours and targeted local customers with compelling offers during slow periods.",
    metrics: {
      trafficIncrease: "50%",
      salesIncrease: "25%",
      roiImprovement: "180%"
    }
  },
  {
    id: 2,
    title: "B2B Software Growth",
    description: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    details: "We conducted comprehensive keyword research, optimized technical SEO, created high-quality content marketing campaigns, and built authoritative backlinks. The strategy focused on long-tail keywords with high conversion potential.",
    metrics: {
      organicTraffic: "200%",
      keywordRankings: "85%",
      leadGeneration: "150%"
    }
  },
  {
    id: 3,
    title: "E-commerce Expansion",
    description: "For a national retail chain, we created a social media marketing campaign that increased followers by 65% and generated a 20% increase in online sales.",
    details: "Our omnichannel approach included Instagram and Facebook advertising, influencer partnerships, user-generated content campaigns, and retargeting strategies. We focused on visual storytelling and community building.",
    metrics: {
      followersGrowth: "65%",
      onlineSales: "20%",
      engagement: "240%"
    }
  }
];