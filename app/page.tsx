"use client"
// Import the useState hook from React
import { useState } from "react";

// Import the NavMobile component
import NavMobile from "./components/NavMobile/NavMobile";

// Import the Nav component
import Nav from "./components/Nav/Nav";

// Import the Hero component
import Hero from "./components/Hero/Hero";

// Import the AboutMe component
import AboutMe from "./components/AboutMe/AboutMe";

// Import the MyServices component
import MyServices from "./components/MyServices/MyService";

// Import the Skills component
import Skills from "./components/Skills/Skills";

// Import the ContactUs component
import ContactUs from "./components/ContactUs/ContactUs";

// Import the MyProjects component
import MyProjects from "./components/MyProjects/MyProjects";

// Import the MyPrices component
import MyPrices from "./components/MyPrices/MyPrices";

// Define the HomePage functional component
export default function HomePage() {
  // Declare a state variable called "showNav" and initialize it to false
  const [showNav, setShowNav] = useState(false);

  // Define a function called "ShowNavHandler" that sets the "showNav" state to true
  const ShowNavHandler = () => setShowNav(true);

  // Define a function called "closeNavHandler" that sets the "showNav" state to false
  const closeNavHandler = () => setShowNav(false);

  // Return the JSX that represents the HomePage component
  return (
    <div >
      {/* Render the NavMobile component and pass the "showNav" and "closeNavHandler" props */}
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />

      {/* Render the Nav component and pass the "showNav" prop */}
      <Nav openNav={ShowNavHandler} />

      {/* Render the Hero component */}
      <Hero />

      {/* Render the AboutMe component */}
      <AboutMe />

      {/* Render the MyServices component */}
      <MyServices />

      {/* Render the Skills component */}
      <Skills />

      {/* Render the MyProjects component */}
      <MyProjects />

      {/* Render the MyPrices component */}
      <MyPrices />

      {/* Render the ContactUs component */}
      <ContactUs />
    </div>
  )
}