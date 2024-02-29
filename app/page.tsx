"use client"
import { useState } from "react"
import NavMobile from "./components/NavMobile"
import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function homePage() {
  const [showNav, setShowNav] = useState(false);
  const ShowNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <div className=" overflow-hidden h-[2000px]">
      <NavMobile showNav = {showNav} closeNav={closeNavHandler}/>
      <Nav openNav={ShowNavHandler}/>
      <Hero />
      </div>
  )
}
 