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
    cattlab,
    yext,
    terraform,
    cypress,
    postgresql,
    ansible,
    vault,
    discgolfpracticeaid,
    leagueoflegendsdataanalysis,
    recidgerator,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Systems Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Practitioner",
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
      name: "Terraform",
      icon: terraform,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Cypress",
      icon: cypress,
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
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Ansible",
      icon: ansible,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Quality Assurance Engineer Intern",
      company_name: "Center for Advanced Transportation Technology",
      icon: cattlab,
      iconBg: "#383E56",
      date: "March 2021 - March 2022",
      points: [
        "Automated web application test cases using both JavaScript and Cypress.",
        "Leveraged Postman to perform REST API Endpoint testing.",
        "Used browser developer tools to test both XMLHttpRequests and responses.",
        "Performed comprehensive QA testing on both the application UI and PostgreSQL databases including Stress/Smoke/Regression/Load & Sanity tests.",
        "Developed Java program to recursively traverse, compare, and verify multiple sets of application API response JSON files",
      ],
    },
    {
      title: "Network/SRE Engineer Summer Intern",
      company_name: "YEXT",
      icon: yext,
      iconBg: "#000000",
      date: "May 2022 - August 2022",
      points: [
        "Scheduled and deployed program with TeamCity and Terraform configurations.",
        "Built Python program to interact and compare Vault secrets between production and disaster recovery sites.",
        "Infrastructure as code - Deployed VMs and Configurations to local Docker instances and Cloud services using Terraform and Ansible.",
        "Worked with Linux environment, bash scripting, environment variable integration with Python tool.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Center for Advanced Transportation Technology",
      icon: cattlab,
      iconBg: "#383E56",
      date: "March 2022 - May 2023",
      points: [
        "Developed Java Loaders to parse JSON/XML API response data for front-end application development.",
        "Deployed parsed data to PostgreSQL databases on local and production environments with Java Hibernate.",
        "Made use of Spring API Framework for cron job scheduling and Java application deployment.",
        "Cached parsed data in company’s custom REST API for efficient data delivery.",
      ],
    },
    {
      title: "SRE/Systems Engineer",
      company_name: "YEXT",
      icon: yext,
      iconBg: "#000000",
      date: "August 2023 - Present",
      points: [],
    },
  ];
  
  const projects = [
    {
      name: "DiscGolfAid",
      description:
        "Android mobile app written in Kotlin meant for tracking progress for the sport Disc Golf.",
      tags: [
        {
          name: "android-dev",
          color: "blue-text-gradient",
        },
        {
          name: "kotlin",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: discgolfpracticeaid,
      source_code_link: "https://github.com/wangjasonx/DiscGolfAid",
    },
    {
      name: "recidgerator",
      description:
        "Web application that enables inputting groceries and outputting potential food recipes that can be created with them.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: recidgerator,
      source_code_link: "https://github.com/wangjasonx/Recidgerator",
    },
    {
      name: "League Data Analysis",
      description:
        "An analysis using data curation, data wrangling, and data analysis to determine win percentages in the game League of Legends.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter notebook",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: leagueoflegendsdataanalysis,
      source_code_link: "https://github.com/wangjasonx/League-of-Legends-Data-Analysis",
    },
  ];
  
  export { services, technologies, experiences, projects };