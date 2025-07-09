"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import JedImage from "@/assets/images/jedyne.jpg"; // Local image
import dave from "@/assets/images/45230660.jpg"; 
import shania from "@/assets/images/shania.jpg"

const testimonials = [
  {
    quote:
      "Certified Vibe Coder",
    name: "Dave Charm Barboco Bulaquena  ",
    designation: "Solutions Designer/ Developer",
    company: "Stratpoint Global Outsourcing Inc",
    src: dave,
  },
  {
    quote:
      " His good personality makes collaboration easy and enjoyable, which is one of his most admirable traits. Beyond his work ethic, what truly stands out is his eagerness to grow and his openness to feedback. Though still early in his career, Allen shows a strong commitment to learning and continuous improvement. ",
    name: "Shania Mae Tan",
    designation: "Compliance and Internal Control Analyst",
    company: " Global Catering Services Corp",
    src: shania,
  },
  {
    quote:
      "I've had the pleasure of working with Allen Walter since 2023 nung college pa, and I can confidently say he's an outstanding frontend developer and a great teammate. I'm genuinely impressed by his creativity especially when it comes to mockup designs. He has a wide perspective and often brings up solutions or design angles that others wouldn't think of. ",
    name: "Jedyne Claveria",
    designation: "Business Analyst",
    company: "",
    src: JedImage,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl font-bold text-foreground">What People Say</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hear from the colleagues and leaders I've had the privilege to work
          with.
        </p>
      </div>

      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
