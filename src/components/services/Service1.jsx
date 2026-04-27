import React, { useEffect } from 'react'
import ServiceOne from './ServiceOne'
import ServicesMain from './ServicesMain'
import Service3 from './service3'
import Divider from '../home/Divider'

// ✅ IMPORT GLOBAL SEO
import { setSEO } from "../../utils/seo";

function Service1() {

  useEffect(() => {
    setSEO({
      title:
        "Wedding, Birthday & Balloon Decoration in Indirapuram & Noida 62 | Mannat Luxury Events",

      description:
        "Get premium wedding, birthday and balloon decoration in Indirapuram & Noida 62. Mannat Luxury Events offers luxury themes at best prices.",

      keywords: [
        "wedding decoration Indirapuram",
        "birthday decoration Noida 62",
        "balloon decoration near me",
        "event decorator Indirapuram",
        "anniversary decoration services"
      ],

      url: "https://yourwebsite.com/services",

      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Event Decoration Services",
        "areaServed": ["Indirapuram", "Noida 62"],
        "provider": {
          "@type": "Organization",
          "name": "Mannat Luxury Events"
        }
      }
    });
  }, []);

  return (
    <>
      {/* ✅ H1 FOR SEO (hidden, UI safe) */}
      <h1 style={{ display: "none" }}>
        Wedding, Birthday and Balloon Decoration in Indirapuram and Noida 62
      </h1>

      <ServiceOne/>
      <Divider/>
      <ServicesMain/>
      <Service3/>

      {/* ✅ INTERNAL LINKS */}
      <div style={{ display: "none" }}>
        <a href="/decoration-in-indirapuram">
          Decoration in Indirapuram
        </a>
        <a href="/decoration-in-noida-62">
          Decoration in Noida 62
        </a>
      </div>
    </>
  )
}

export default Service1