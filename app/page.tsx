"use client"
import { useState } from "react"
import NavMobile from "./components/NavMobile/NavMobile";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import ContactUs from "./components/ContactUs/ContactUs";
import MyServices from "./components/MyServices/MyService";
import MyProjects from "./components/MyProjects/MyProjects";
import MyPrices from "./components/MyPrices/MyPrices";


export default function homePage() {
  const [showNav, setShowNav] = useState(false);
  const ShowNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div >
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={ShowNavHandler} />
      <Hero />
      <AboutMe />
      <MyServices />
      <Skills />
      <MyProjects />
      <MyPrices />
      <ContactUs />
    </div>
  )
}
