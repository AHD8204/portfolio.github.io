import { j } from "maath/dist/misc-7d870b3c.esm";
import {
    desainer,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    c_language,
    java,
    php,
    python,
    pr,
    corel,
    ae,
    ps,
    bromo1,
    bromo2,
    bromo3,
    bromo4,
    bromo5,
    bromo6,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Desainer",
      icon: desainer,
    },

    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Adobe Photoshop",
      icon: ps,
    },
    {
      name: "Corel Draw",
      icon: corel,
    },
    {
      name: "Adobe Premiere Pro",
      icon: pr,
    },
    {
      name: "Adobe After Effect",
      icon: ae,
    },
    
  
  ];
  
  const experiences = [
    {
      title: "C",
      company_name: "C",
      icon: c_language,
      iconBg: "#383E56",
      date: "Sep 2021 - Des 2021",
      points: [
        "I have a good understanding of C programming language. I have studied basic programming concepts such as variables, data types, operators, flow control, repetition, and functions in C language.",
      ],
    },
    {
      title: "Python",
      company_name: "python",
      icon: python,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Apr 2022",
      points: [
        "I have studied the Python programming language. I've learned about the basics of Python programming, including data types, control structures, functions, modules, and string manipulation. Apart from that, I also learned to apply simple python syntax to roblox",
      ],
    },
    {
      title: "PHP",
      company_name: "php",
      icon: php,
      iconBg: "#383E56",
      date: "Jan 2022 - Apr 2022",
      points: [
        "I have also studied the PHP programming language. PHP is a widely used language for web application development. I've learned the basics of PHP, such as basic syntax, variables, data types, flow control, functions, and string manipulation. I've also learned the basic concepts of using PHP to access databases and build interactive web applications.",
      ],
    },
    {
      title: "Java",
      company_name: "Meta",
      icon: java,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Des 2022",
      points: [
        "I have deepened my understanding of the Java programming language. Java is a popular and versatile programming language, especially in the development of desktop, web and mobile based applications. I have studied object-oriented concepts in Java, including classes, objects, inheritance, polymorphism, and abstraction.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: bromo1,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: bromo2,
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: bromo3,
    },
    {
      testimonial:"1",
      name: "1",
      designation: "1",
      company: "1",
      image: bromo4,
    },
    {
      testimonial:"2",
      name: "2",
      designation: "2",
      company: "2",
      image: bromo5,
    },
    {
      testimonial:"3",
      name: "3",
      designation: "3",
      company: "3",
      image: bromo6
    }

    
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };