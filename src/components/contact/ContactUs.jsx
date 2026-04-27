import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Divider from "../home/Divider";
import contactBg from "../../assets/za-18.jpeg";
import { createContact } from "../../api/apiRoute";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ IMPORT SEO
import { setSEO } from "../../utils/seo";

export default function ContactUs() {

  // ✅ SEO APPLY
  useEffect(() => {
    setSEO({
      title:
        "Contact Decoration Services in Indirapuram & Noida 62 | Mannat Luxury Events",

      description:
        "Call or message Mannat Luxury Events for wedding, birthday and balloon decoration booking in Indirapuram & Noida 62.",

      keywords: [
        "contact decorator Indirapuram",
        "decoration services Noida 62",
        "event booking",
        "wedding decorator contact",
        "birthday decoration booking"
      ],

      url: "https://yourwebsite.com/contact-us",

      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Mannat Luxury Events",
        "url": "https://yourwebsite.com/contact-us",
        "areaServed": ["Indirapuram", "Noida 62"]
      }
    });
  }, []);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      toast.error("All fields are required");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      toast.error("Name should contain only letters");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Invalid email address");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      toast.error("Phone must be 10 digits");
      return;
    }

    try {
      setLoading(true);
      await createContact(formData);
      toast.success("Message Sent 🎉");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {/* ✅ H1 SEO (hidden) */}
      <h1 style={{ display: "none" }}>
        Contact Wedding and Birthday Decoration Services in Indirapuram and Noida 62
      </h1>

      {/* 💎 HERO */}
      <section className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

        <motion.img
          src={contactBg}
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10 }}
        />

        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

        <div className="relative z-30 flex items-center h-full px-6 sm:px-16">
          <motion.div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Contact <span className="text-yellow-400">Us</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg">
              Book your decoration in Indirapuram & Noida 62 today.
            </p>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* CONTACT SECTION */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <motion.div className="bg-[#111] p-8 rounded-2xl border border-yellow-500/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Phone className="text-yellow-400" />
                <p className="text-gray-300">78887-35541</p>
              </div>

              <div className="flex gap-4">
                <Mail className="text-yellow-400" />
                <p className="text-gray-300 break-all">
                  Soodmannat902gmail.com
                </p>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-yellow-400" />
                <p className="text-gray-300">
                  Ghaziabad (Indirapuram & Noida 62 Service Area)
                </p>
              </div>

            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} className="bg-[#111] p-8 rounded-2xl border border-yellow-500/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Send Message
            </h2>

            <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your Name" className="bg-black p-3 w-full mb-4 text-white" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="bg-black p-3 w-full mb-4 text-white" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="bg-black p-3 w-full mb-4 text-white" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="bg-black p-3 w-full mb-4 text-white" />

            <button disabled={loading} className="w-full bg-yellow-500 py-3 rounded-lg font-bold text-black">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </section>

      <Divider />

      {/* MAP */}
      <section className="bg-black py-10 px-6">
        <iframe
          src="https://www.google.com/maps?q=Indirapuram&z=15&output=embed"
          className="w-full h-[400px]"
          loading="lazy"
        ></iframe>
      </section>

      {/* INTERNAL LINKS */}
      <div style={{ display: "none" }}>
        <a href="/decoration-in-indirapuram">Decoration in Indirapuram</a>
        <a href="/decoration-in-noida-62">Decoration in Noida 62</a>
      </div>

    </>
  );
}