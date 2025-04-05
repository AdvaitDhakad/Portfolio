import { link } from "fs";
import { url } from "inspector";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Beliefs", link: "#beliefs" },
  { name: "Projects", link: "#skills" },
  { name: "Profile", link: "/profilepage" },
];

export const navItemsAboutPage = [
  { name: "Home", link: "/" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Data-Driven Insights: A Fresh Perspective",
    description:
      "Exploring trends through interactive visualization. Bringing numbers to life with real-time data updates and insightful analysis.",
    className:
      "lg:row-span-1 lg:col-span-5 md:col-span-6 md:row-span-1 lg:min-h-[60vh] md:mx-0 ",
  },
  {
    id: 2,
    title: "My Beliefs and Values",
    description:
      "Combining curosity and smart work to achive success and create a better world.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[60vh]",
    imgClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Deep Learning and AI enthusiast",
    description:
      "I am passionate about AI and its potential to change the world",
    className:
      "lg:col-span-3 lg:row-span:1 md:col-span-3 md:row-span-1 lg:min-h-[50vh]",
    imgClassName: "",
    img: "",
    spareImg: "",
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
    thumbnail: "/p1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/p2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/p3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/p4.svg",
  },
];

export const socialMedia = [
  {
    platform: "github",
    icon: "/socials/github-logo-svgrepo-com.svg",
    linkurl: "https://github.com/AdvaitDhakad",
  },
  {
    platform: "linkedin",
    icon: "/socials/linkedin-svgrepo-com.svg",
    linkurl: "https://www.linkedin.com/in/advait-dhakad-0a29681a0/",
  },
  {
    platform: "instagram",
    icon: "/socials/instagram.svg",
    linkurl: "https://www.instagram.com/advaitdhakad/",
  },
];

export const Projects = [
  {
    id: 1,
    title: "IFAML",
    desc: "Interactive Frontend Analyzer tool for Machine Learning is a web application designed to provide a user-friendly interface for preprocessing and analyzing CSV data using various machine learning algorithms. The tool visually represents the data flow through the preprocessing steps using React Flow, making the process transparent and understandable.",
    thumbnail: "/projects/ifaml.png",
    gitlink: "https://github.com/AdvaitDhakad/IFAML",
  },
  {
    id: 2,
    title: "Portfolio Website",
    desc: "A personal portfolio website showcasing my projects and skills.",
    thumbnail: "/projects/portfolio.png",
    gitlink: "https://github.com/AdvaitDhakad/Portfolio",
  },
  {
    id: 3,
    title: "Stock NLP Web App",
    desc: "Stock NLP Web App is a web application that provides users with the ability to analyze stock market data using natural language processing techniques. The app allows users to input stock-related text data, such as news articles or social media posts, and performs sentiment analysis to gauge public sentiment towards specific stocks.",
    thumbnail: "/projects/Stock_NLP.png",
    gitlink: "https://github.com/AdvaitDhakad/Stock_NLP_Website-main",
  },
  {
    id: 4,
    title: "Cartoon Generator Web App",
    desc: "Using Text-to-Image Generation to create cartoon images from text descriptions.",
    thumbnail: "",
    gitlink: "https://github.com/AdvaitDhakad/Cartoon-Generator-Website",
  },
  {
    id: 5,
    title: "Multi-Tasking NLP Classifier",
    desc: " A NLP classifier that can perform multiple tasks such as sentiment analysis, and text classification using a single model.",
    thumbnail: "",
    gitlink: "https://github.com/AdvaitDhakad/Multi-tasking-NLP-Classification",
  },
  {
    id: 6,
    title: "Point-of-Sale System using SQL and Python",
    desc: "A Point-of-Sale (POS) system is a software application that allows businesses to manage sales transactions, inventory, and customer data. This project involves creating a POS system using SQL and Python, which provides a user-friendly interface for managing sales and inventory.",
    thumbnail: "",
    gitlink: "https://github.com/AdvaitDhakad/POS-CUI-System-",
  },
  {
    id: 7,
    title: "Stock Price Prediction Web App using Django",
    desc: " A web application that predicts stock prices using machine learning algorithms. The app allows users to input stock data and provides predictions based on historical trends.",
    thumbnail: "/projects/stock_analysis_site.png",
    gitlink: "https://github.com/AdvaitDhakad/Stock_Prediction_Web_Interface",
  },
  {
    id: 8,
    title: "Guasian Blur",
    desc: "A basic approach to get deep knowledge about the Convolution and its implementation with only CV2 and Python.",
    thumbnail: "",
    gitlink: "https://github.com/AdvaitDhakad/Guasisian_Blur",
  },
  {
    id: 9,
    title: "Prefix and Postfix Evaluator",
    desc: "A Simple CUI based calculator that can evaluate prefix and postfix expressions.",
    thumbnail: "",
    gitlink: "https://github.com/AdvaitDhakad/Prefix-Postfix",
  },
  {
    id: 10,
    title: "Applying Deep Learning to Stock Market",
    desc: "A project that applies deep learning techniques to predict stock market trends and prices.",
    thumbnail: "/projects/DeepLearningStock.png",
    gitlink: "https://github.com/AdvaitDhakad/Stock_market_Deep_Learning",
  },
];
