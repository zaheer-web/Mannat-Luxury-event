import React, { useEffect } from 'react'
import GalleryHero from './GalleryHero'
import AllPhotos from './AllPhotos'
import Divider from '../home/Divider'
import GallerySection from './GallerySection'
import ReelsSection from './ReelsSection'

// ✅ IMPORT SEO
import { setSEO } from "../../utils/seo";

function Gallery() {

  useEffect(() => {
    setSEO({
      title:
        "Decoration Gallery in Indirapuram & Noida 62 | Mannat Luxury Events",

      description:
        "Explore our wedding, birthday and balloon decoration gallery in Indirapuram & Noida 62. देखें real event setups and premium decoration work.",

      keywords: [
        "decoration gallery Indirapuram",
        "event gallery Noida 62",
        "wedding decoration photos",
        "birthday decoration images",
        "balloon decoration gallery"
      ],

      url: "https://yourwebsite.com/gallery",

      schema: {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Mannat Luxury Events Gallery",
        "description": "Wedding and birthday decoration gallery",
        "areaServed": ["Indirapuram", "Noida 62"]
      }
    });
  }, []);

  return (
    <>
      {/* ✅ H1 SEO (hidden, UI safe) */}
      <h1 style={{ display: "none" }}>
        Decoration Gallery in Indirapuram and Noida 62
      </h1>

      <GalleryHero/>
      <Divider/>
      <AllPhotos/>
      <Divider/>
      <ReelsSection/>
      <Divider/>
      <GallerySection/>

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

export default Gallery