import {
    mobile,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Graphic Designer",
      icon: web,
    },
    {
      title: "Blender Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Graphic Design Intern",
      company_name: "DirectorIn",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug,2023 - Sep,2023",
      points: [
        "Designed social media content including posts, stories and promotional graphics to boost online visibility and audience engagement across platforms like Instagram, Facebook and LinkedIn.",
        "Created customized digital and print invitations for events and campaigns ensuring consistent brand messaging and aesthetic appeal.",
        "Collaborated with marketing teams to align content with campaign goals, seasonal promotions and target audience preferences",  
      ],
    },
    {
      title: "Graphic Design Intern",
      company_name: "InPrime Finserv",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug,2024 - Nov,2024",
      points: [
        "Created visually engaging social media content (posts and carousels) to boost brand visibility and drive audience interaction across Instagram, LinkedIn and Facebook.",
        "Designed clear, informative and visually appealing PowerPoint presentations for investor pitches and internal training enhancing message clarity and audience retention.",
        "Crafted compelling customer testimonials by presenting authentic success stories that built trust and reinforced brand credibility.",
        "Developed informative newsletters with curated content, product updates and promotional campaigns, resulting in improved open rates and customer engagement.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Nour Clothing",
      icon: shopify,
      iconBg: "#383E56",
      date: " Dec,2024 - Feb,2025 ",
      points: [
        "Led the end-to-end design of a distinctive brand logo that aligned with their core values.",
        "Created engaging social media content including graphics, carousels and promotional posts, driving audience interaction and brand awareness.",
        "Developed a comprehensive brand manual detailing visual identity elements such as logo usage, typography hierarchy, color palette specifications, and layout guidelines to ensure consistent brand representation across all media.",
       
      ],
    },
    {
      title: "Freelance Graphic Designer",
      company_name: "The Alpha Team",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March,2025 - July,2025",
      points: [
        "Designed visually engaging social media graphics, carousels and promotional posts tailored to client branding across platforms like Instagram, Facebook, LinkedIn and Twitter. ",
        "Edited short form video content for marketing campaigns, reels and YouTube, enhancing viewer engagement through dynamic transitions and captions.",
        
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
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: " Brand Manual",
      description:
        "Brand guidelines for a hypothetical brand called Resqlink.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
        {
          name: "canva",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.behance.net/gaurinagar1",
    },
    {
      name: "Brand Manual",
      description:
        "Brand guidelines for a startup called Nour Clothing.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
        {
          name: "illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.behance.net/gaurinagar1",
    },
    {
      name: "UI/UX",
      description:
        "App design for a hypothetical brand called Zuri.",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "photoshop",
          color: "green-text-gradient",
        },
        {
          name: "illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.behance.net/gaurinagar1",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };