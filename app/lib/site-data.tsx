import React from "react";
import {
  Calendar,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  badge: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  text: string;
};

export const brand = {
  name: "H2H Leisure",
  tagline: "Motorhome, Caravan & Campervan Repairs & Maintenance",
  phone: "+447404249203",
  email: "hello@h2hleisure.co.uk",
  website: "https://www.h2hleisure.co.uk",
  facebook: "https://www.facebook.com/p/H2H-Leisure-61579803252525/",
};

export const services: Service[] = [
  {
    title: "Habitation Checks",
    desc: "Full internal and external checks covering damp, gas, electrics, water systems, ventilation, and key appliances.",
    icon: <CheckCircle2 className="h-6 w-6" />,
    badge: "Essential",
  },
  {
    title: "Pre-purchase Inspections",
    desc: "Detailed inspections before buying, highlighting any issues, damp, faults, or concerns so you can make an informed decision.",
    icon: <CheckCircle2 className="h-6 w-6" />,
    badge: "Recommended",
  },
  {
    title: "Water Leaks & Seal Repairs",
    desc: "Tracing water ingress, resealing joints, and repairing leak-related damage before it spreads.",
    icon: <ShieldCheck className="h-6 w-6" />,
    badge: "Popular",
  },
  {
    title: "Solar Panel Install",
    desc: "Installation support for solar upgrades, fitted neatly and practically for life on the road.",
    icon: <Wrench className="h-6 w-6" />,
    badge: "Upgrade",
  },
  {
    title: "Fridge, Heating & Boiler Repairs",
    desc: "Diagnosis and repair of fridges, heating systems, and boilers to keep everything running properly.",
    icon: <Wrench className="h-6 w-6" />,
    badge: "Essential",
  },
  {
    title: "Skylights & Windows",
    desc: "Repairs, resealing and replacements for skylights and windows to keep your vehicle watertight and secure.",
    icon: <Wrench className="h-6 w-6" />,
    badge: "Popular",
  },
  {
    title: "Awning & Step Repairs",
    desc: "Repairs and adjustments for awnings, steps, and everyday wear-and-tear issues.",
    icon: <Calendar className="h-6 w-6" />,
    badge: "Popular",
  },
  {
    title: "Cupboards, Fittings & More",
    desc: "Interior repair work for cupboards, hinges, fittings, fixtures, and similar issues inside the van.",
    icon: <Clock3 className="h-6 w-6" />,
    badge: "Interior",
  },
  {
    title: "Mobile Callouts",
    desc: "A fully mobile service across Craigavon and roughly a 15-mile radius. We come to you where practical.",
    icon: <MapPin className="h-6 w-6" />,
    badge: "Mobile",
  },
  {
    title: "Emergency Callout",
    desc: "Urgent callouts for appliance breakdowns, leaks, or issues that need immediate attention.",
    icon: <Clock3 className="h-6 w-6" />,
    badge: "Urgent",
  },
];

export const faqs: Faq[] = [
  {
    q: "Do you offer a mobile service?",
    a: "Yes. H2H Leisure is a fully mobile service covering Craigavon and approximately a 15-mile radius.",
  },
  {
    q: "What vehicles do you work on?",
    a: "Motorhomes, caravans, and campervans for a wide range of repairs, maintenance jobs, habitation checks, and fitting work.",
  },
  {
    q: "Can I contact you through WhatsApp?",
    a: "Yes. WhatsApp is ideal for quick enquiries, sending photos, and discussing faults before booking.",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Craigavon and cover roughly a 15-mile radius including Lurgan, Portadown, Banbridge, Armagh, Dungannon, Moira, Lisburn, and surrounding areas. We can also cover all other areas of Northern Ireland, though an additional travel charge may apply. If you are unsure, just get in touch and we will confirm.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Mobile repair customer",
    text: "Great service from first message to final repair. Quick response, easy to deal with, and really handy that he comes out to you.",
  },
  {
    name: "Habitation check customer",
    text: "Professional and thorough. Everything was explained clearly and the check gave us real peace of mind before travelling.",
  },
  {
    name: "Leak repair customer",
    text: "Tracked down a water leak that had been causing trouble for ages. Solid job and no fuss.",
  },
];