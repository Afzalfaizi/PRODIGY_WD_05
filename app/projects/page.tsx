
import ProjectCard from "../Helper/ProjectCard/ProjectCard"
const Projects = () => {
  return (
    <div className=' pt-[8rem] pb-[3rem] bg-gray-900'>
      <div className=' text-center'>
        <p className=' heading__mini'> Recent Works </p>
        <h1 className=' heading__primary'> My Best <span className=' text-yellow-300'>Projects</span></h1>
      </div>
      <ProjectCard
        title='E-commerce Website'
        decription='I developed a cutting-edge e-commerce website using Next.js and TypeScript.
        The project featured server-side rendering for optimal performance and improved SEO.
        TypeScript ensured type safety and minimized bugs throughout the development process.
        The website delivered a seamless user experience with fast load times and a modern interface.'
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p1.png" />
      <ProjectCard
        title='Portfolio Website'
        decription='I created a sleek and professional personal portfolio website to highlight my skills and accomplishments.
         The website boasts a modern and responsive design, ensuring a seamless experience across different devices.
          It showcases my projects, qualifications, and contact information, allowing potential clients or employers to
           easily explore my work and get in touch. 
           The portfolio website effectively represents my brand and expertise in a visually appealing and user-friendly manner.'
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p2.png" />
      <ProjectCard
        title='Fullstack Food delivery Webapp'
        decription='I developed a full-stack website using Node.js, MongoDB, and Next.js.
         This project combined the power of a robust backend with Node.js and MongoDB for data storage and retrieval,
          while Next.js provided server-side rendering for enhanced performance and SEO.
           The website seamlessly integrated front-end and back-end functionalities,
            delivering a dynamic and interactive user experience.'
        tech1="React"
        tech2="Next Js"
        tech3="Node Js"
        tech4="MongoDB"
        image="/images/p3.png" />
      <ProjectCard
        title='Travel Website'
        decription='I developed a captivating travel website using React, Next.js, Tailwind CSS, and TypeScript.
         The project combined the flexibility of React components with the server-side rendering capabilities of Next.js,
          resulting in a fast and interactive user experience. Tailwind CSS provided a streamlined and responsive design,
           while TypeScript ensured type safety throughout the development process, minimizing errors and improving code quality'
        tech1="React"
        tech2="Next Js"
        tech3="Node Js"
        tech4="MongoDB"
        image="/images/p4.png" />
    </div>
  )
}

export default Projects