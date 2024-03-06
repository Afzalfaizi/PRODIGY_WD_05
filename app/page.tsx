"use client"
import { useState } from "react"
import NavMobile from "./components/NavMobile/NavMobile";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";


export default function homePage() {
  const [showNav, setShowNav] = useState(false);
  const ShowNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div className=" overflow-hidden h-[2000px]">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav={ShowNavHandler} />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  )
}
