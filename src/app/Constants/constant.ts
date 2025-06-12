import { college } from "../Models/college";
import { experience } from "../Models/experience";
import { Project } from "../Models/Project";
import { Service } from "../Models/Service";
import { skills } from "../Models/skills";

export class constant {
  public static fullName: string = "Meghana G S";
  public static personalEmail: string = "meghana.shetty.105@gmail.com";
  public static dob: "12/01/1999";
  public static location: string = "Karnataka, India";
  public static summary: string = `  I'm a software engineer and a developer with experience in technologies such as Angular, Spring Boot and MySQL.
  I have worked on a project based on banking application.
  I have worked on the front-end side of these projects and have experience designing web pages.`


  public static services: Service[] = [
    {
      title: "Web Development",
      icon: "bi bi-display-fill",
      information: "I Use Angular, Javascript, HTML and CSS for web development.",

    },
    {
      title: "Back-end Developement",
      icon: "bi bi-gear-fill",
      information: "I Use Spring-boot.",
    },
    {
      title: "Database",
      icon: "bi bi-database-fill-gear",
      information: "I Use MSSQL for database.",
    }
  ];

  public static colleges: college[] = [
    {
      name: "JNNCE",
      course: "Computer Science",
      date: "2017 - 2021"
    },
    {
      name: "Online",
      course: "MBA (IT Management)",
      date: "2023 - present"
    }
  ];

  public static experience: experience[] = [
    {
      company: "Worldpay",
      date: "June/2021 - present",
      designation: "Software Engineer"
    }
  ];

  public static skills: skills[] = [
    {
      skill: "Web Development",
      percentage: "80"
    },
    {
      skill: "Angular",
      percentage: "85"
    },
    {
      skill: "HTML/CSS",
      percentage: "90"
    },
    {
      skill: "Javasript/Typescript",
      percentage: "80"
    },
    {
      skill: "spring-boot",
      percentage: "60"
    }
  ];

  public static projects: Project[] = [
{
  name:"Worldpay Dashboard Apllication",
  mainImage: "assets/dashboard-fis.jpeg",
  Images: [
    "assets/dashboard-fis.jpeg"
]
},
  ];

  public static getAge() {
    var date = new Date("12/01/1999");
    var month_diff = Date.now() - date.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age.toString();
  }
}
