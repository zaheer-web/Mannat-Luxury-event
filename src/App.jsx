import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./layouts/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./layouts/footer";

// normal pages
import Home from "./components/home/Index";
import ContactUs from "./components/contact/ContactUs";






import Service1 from "./components/services/Service1";
import AboutMain from "./components/about/AboutMain";
import Gallery from "./components/gallery/Gallery";
import Deshboard from "./adminDeshboard/Dashboard";
import Course from "./components/course/Course";
import Birthday from "./layouts/Birthday";
import Aniversary from "./layouts/Aniversary";
import KidShower from "./layouts/KidShower";
import SameDay from "./layouts/SameDay";
import Activity from "./layouts/Activity";
import Haldi from "./layouts/Haldi";
import Gift from "./layouts/Gift";
import Festivals from "./layouts/Festivals";



function App() {
  const location = useLocation();

  // check admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <ScrollToTop />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/our-gallery" element={<Gallery/>} />
        <Route path="/about" element={<AboutMain/>} />
        <Route path="/services" element={<Service1/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/course" element={<Course/>} />

        <Route path="/admin" element={<Deshboard />} />
        <Route path="/gallery/birthday" element={<Birthday/>} />
        <Route path="/gallery/sameday" element={<SameDay/>} />
        <Route path="/gallery/anniversary" element={<Aniversary/>} />
        <Route path="/gallery/babyshower" element={<KidShower/>} />
        <Route path="gallery/festive" element={<Festivals/>} />
        <Route path="/gallery/gift" element={<Gift/>} />
        <Route path="/gallery/kids" element={<Activity/>} />
        <Route path="/gallery/pre-wedding" element={<Haldi/>} />

        



       

        

       

       
        
      </Routes>



      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
