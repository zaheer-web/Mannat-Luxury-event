import React, { useEffect } from "react";
import AboutHero from "./AboutHero";
import CompanyInfo from "./CompanyInfo";
import StatsSection from "./StatsSection";
import WorkingAreas from "./WorkingAreas";
import Divider from '../home/Divider';

// ✅ IMPORT SEO
import { setSEO } from "../../utils/seo";

export default function AboutMain() {

  useEffect(() => {
    setSEO({
      title: "About Mannat Luxury Events | Decoration in Indirapuram & Noida 62",
      
      description:
        "Mannat Luxury Events is a trusted name for wedding, birthday and balloon decoration in Indirapuram & Noida 62. We create premium and memorable event setups.",

      keywords: [
        "about Mannat Luxury Events",
        "event decorator Indirapuram",
        "decoration company Noida 62",
        "wedding decorator Indirapuram",
        "birthday decoration services"
      ],

      url: "https://yourwebsite.com/about-us",

      schema: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mannat Luxury Events",
        "url": "https://yourwebsite.com",
        "areaServed": ["Indirapuram", "Noida 62"],
        "description": "Event decoration company providing wedding and birthday decoration services"
      }
    });
  }, []);

  return (
    <>
      {/* ✅ H1 SEO (hidden, UI safe) */}
      <h1 style={{ display: "none" }}>
        About Decoration Services in Indirapuram and Noida 62 - Mannat Luxury Events
      </h1>

      <AboutHero />
      <Divider/>
      <CompanyInfo />
      <Divider/>
      <StatsSection />
      <Divider/>
      <WorkingAreas />

      {/* ✅ INTERNAL LINKS (SEO BOOST) */}
      <div style={{ display: "none" }}>
        <a href="/decoration-in-indirapuram">Decoration in Indirapuram</a>
        <a href="/decoration-in-noida-62">Decoration in Noida 62</a>
      </div>
    </>
  );
}