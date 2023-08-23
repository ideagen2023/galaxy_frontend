import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import NavigationBar from "../../layouts/navbar";
import Footer from "../footer";
import Contact from "../../pages/contact";
import About from "../../pages/about";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Blog from "../../pages/blog";
import BlogPage from "../../pages/blogPage";
import NotFound from "../../pages/notfound";
import ServicePage from "../../pages/servicePage";
import ScrollToTop from "../ScrollToTop";

import { LanguageProvider } from "./translation";
import Gallery from "../../pages/gallery";
import Enquiry from "../../pages/enquire";
import Referral from "../../pages/referral";

const Container = () => {
  return (
    <BrowserRouter>
    <ScrollToTop>
      <>
      <LanguageProvider>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/enquire" element={<Enquiry />}/>
        <Route path="/referral" element={<Referral />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/services/:link" element={<ServicePage/>}/>
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blog_title" element={<BlogPage />} />         */}
      </Routes>
      <ToastContainer />
      <Footer/>
      </LanguageProvider>
      </>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Container;
