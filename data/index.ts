import { url } from "inspector";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Data-Driven Insights: A Fresh Perspective",
    description:
      "Exploring trends through interactive visualization. Bringing numbers to life with real-time data updates and insightful analysis.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-1 lg:min-h-[60vh]",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    title: "My Beliefs and Values",
    description:
      "Combining curosity and smart work to achive success and create a better world.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[60vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "",
    className:
      "lg:col-span-2 lg:row-span:1 md:col-span-3 md:row-span-1 lg:min-h-[50vh]",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Deep Learning and AI enthusiast",
    description:
      "I am passionate about AI and its potential to change the world",
    className:
      "lg:col-span-3 lg:row-span:1 md:col-span-3 md:row-span-1 lg:min-h-[50vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const skills = [
  {
    id: 1,
    title: "React.js",
    desc: "Strong understanding of React.js, hooks, context API, and state management.",
    icon: "/tech_stack/react.svg",
  },
  {
    id: 2,
    title: "Next.js",
    desc: "Experience with Next.js for SSR and SSG, improving performance and SEO.",
    icon: "/tech_stack/nextjs.svg",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    desc: "Use Tailwind CSS for rapid, responsive, and modern UI development.",
    icon: "/tech_stack/tail.svg",
  },
  {
    id: 4,
    title: "TypeScript",
    desc: "Leverage TypeScript for type safety and better developer experience.",
    icon: "/tech_stack/ts.svg",
  },
  {
    id: 5,
    title: "Python",
    desc: "Strong foundation in Python for backend, data analysis, and ML.",
    icon: "/tech_stack/python.svg",
  },
  {
    id: 6,
    title: "Node.js",
    desc: "Experience with Node.js for scalable server-side apps and APIs.",
    icon: "/tech_stack/nodejs.svg",
  },
  {
    id: 7,
    title: "CSS",
    desc: "Strong understanding of CSS for styling and layout of web pages.",
    icon: "/tech_stack/css.svg",
  },
  {
    id: 8,
    title: "JavaScript",
    desc: "Strong understanding of JavaScript for interactive web applications.",
    icon: "/tech_stack/javascript.svg",
  },
  {
    id: 9,
    title: "JAVA",
    desc: "Strong understanding of Java for building robust and scalable applications.",
    icon: "/tech_stack/java.svg",
  },
  {
    id: 10,
    title: "Dataabase",
    desc: "Experience with MongoDB and MySQL for data storage and management.",
    icon: "/tech_stack/database.svg",
  },
  {
    id: 11,
    title: "Git",
    desc: "Use Git for version control and collaboration on software projects.",
    icon: "/tech_stack/git.svg",
  },
  {
    id: 12,
    title: "Django",
    desc: "Experience with Django for web applications and RESTful API development.",
    icon: "/tech_stack/django.svg",
  },
  {
    id: 13,
    title: "Flask",
    desc: "Experience with Flask for lightweight web applications and APIs.",
    icon: "/tech_stack/flask.svg",
  },
  {
    id: 14,
    title: "Docker",
    desc: "Experience with Docker for containerization and deployment of applications.",
    icon: "/tech_stack/docker.svg",
  },
  {
    id: 15,
    title: "HTML",
    desc: "Strong understanding of HTML for structuring web content effectively.",
    icon: "/tech_stack/html.svg",
  },
  {
    id: 16,
    title: "Linux",
    desc: "Experience with Linux as a daily driver and important command-line tools.",
    icon: "/tech_stack/linux.svg",
  },
  {
    id: 17,
    title: "SQL",
    desc: "Experience with SQL for querying and managing relational databases.",
    icon: "/tech_stack/mysql.svg",
  },
  {
    id: 18,
    title: "REST APIs",
    desc: "Experience with REST APIs for building and consuming web services.",
    icon: "/tech_stack/rest.svg",
  },
  {
    id: 19,
    title: "Selenium",
    desc: "Experience with Selenium for automating web applications for data extraction.",
    icon: "/tech_stack/selenium.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
