import React, { useEffect } from "react";
import Hero from "./Hero";
import About1 from "./About1";
import Service from "./Service";
import CTA from "./CTA";
import Highlights from "./Highlights";
import Portfolio from "./Portfolio";
import Divider from "./Divider";
import ReelsSection from "../gallery/ReelsSection";

import { setSEO } from "../../utils/seo";
import CoursePricing from "../course/CoursePricing";

export default function Index() {
  useEffect(() => {
  setSEO({
    title: "Best Decoration in Indirapuram & Noida 62 | Mannat Luxury Events",
    description:
      "Premium wedding, birthday and balloon decoration in Indirapuram & Noida 62.",
    keywords: [
      "decoration in Indirapuram",
      "decoration in Noida 62",
      "wedding decoration",
      "birthday decoration",
      "balloon decoration"
    ],
    url: "https://yourwebsite.com/",

    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Decoration Services",
      "areaServed": ["Indirapuram", "Noida 62"]
    }
  });
}, []);
  return (
    <>
      <Hero />
      <Divider />
      <About1 />
      <Divider />
      <Service />
      <Divider />
      <CTA />
      
      <Highlights />
       <Divider />

      
      <ReelsSection/>



      <Divider />
      <CoursePricing/>
      <Divider />

      

      <Portfolio />
      
    </>
  );
}