/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yahya's Portfolio",
  description:
    "Computer Science undergrad deeply passionate about software development and testing. Proficient in C/C++, C#, Dart, Python, SQL, Winform/PyQT, ReactJS, and Flutter, I specialize in prompt engineering, debugging, UI design, and cross-platform development. With experience in Android, web, and desktop app development, I aspire to be a QA Engineer. Enthusiastic about technology's evolution",
  og: {
    title: "Yahya Portfolio",
    type: "website",
    url: "http://yahyamirza.com/",
  },
};

//Home Page
const greeting = {
  title: "Yahya M. Mirza",
  logo_name: "Yahya M. Mirza",
  subTitle:
    "Computer Science undergrad deeply passionate about software development and testing. Proficient in C/C++, C#, Dart, Python, SQL, Winform/PyQT, ReactJS, and Flutter, I specialize in prompt engineering, debugging, UI design, and cross-platform development. With experience in Android, web, and desktop app development, I aspire to be a QA Engineer. Enthusiastic about technology's evolution",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/Yahya123-hub/My-Projects",
  githubProfile: "https://github.com/Yahya123-hub",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Yahya123-hub",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yahyamirza/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:yahyamirza300@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  
];

const skills = {
  data: [
    {
      title: "Frontend & Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Software development and testing proficiency in C/C++, C#, Dart, Python, SQL, Winform/PyQT, ReactJS, Flutter.",
        "⚡ Skilled in prompt engineering, debugging, UI design, and cross-platform development for Android, web, and desktop apps.",
        "⚡ Aspiring QA Engineer actively enhancing skills, adept in Overleaf and LaTeX for document preparation.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "simple-icons:coursera",
      style: {
        color: "#000FF",
      },
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Of Engineering & Technology",
      subtitle: "BS in Computer Science",
      logo_path: "uet.png",
      alt_name: "UET LHR",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Studied basic software engineering subjects like DSA, DBMS, OS, & AI etc.",
        "⚡ I've done courses on Internet History & Security and Full Stack Development.",
        "⚡ Acquired proficiency in C/C++, C#, Dart, Python, SQL, UI design, debugging, and cross-platform development, with a focus on quality assurance and a proactive approach to staying updated on industry advancements at university.",
      ],
      website_link: "https://www.uet.edu.pk/home/",
    },
    {
      title: "Unique Group Of Institutions",
      subtitle: "ICS",
      logo_path: "ugi.jpg",
      alt_name: "UGI",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Learned how Programming Languages work",
        "⚡ Received Scholarship for performing well in tests sessions.",
        "⚡ Completed my ICS with 97% Marks.",
      ],
      website_link: "https://unique.edu.pk",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SQL Basic",
      subtitle: "- Hackerrank",
      logo_path: "h.png",
      certificate_link:
        "https://www.hackerrank.com/certificates/fa1e42a3ed80",
      alt_name: "H",
      color_code: "#050c18",
    },
    {
      title: "Internet History, Technology & Security",
      subtitle: "- University Of Michigan",
      logo_path: "m.png",
      certificate_link:
        "https://drive.google.com/file/d/1vutsaUiXZOeU9lJyWRV9hXhZMRSmtcF2/view?usp=sharing",
      alt_name: "ihts",
      color_code: "#00274c",
    },
   
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Full Time Student",
  description:
    "As a full-time student, I've honed skills in C/C++, C#, Dart, Python, SQL, UI design, and cross-platform development for Android, web, and desktop applications. Familiar with quality assurance principles, I use tools like Overleaf and LaTeX for efficient document preparation. My proactive approach keeps me informed about industry advancements in computer science.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Experience",
      work: true,
      experiences: [
        {
          title: "Student",
          company: "UET Lahore",
          company_url: "https://www.uet.edu.pk/home/",
          logo_path: "uet.png",
          duration: "Nov 2021 - Present",
          location: "Pakistan, Lahore",
          description:
            "Built several projects using the latest tech stacks",
          color: "#fc1f20",
        },
      ],
    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create flexible projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "s.jpg",
    description:
      "I am accessible on numerous social media platforms. Feel free to reach out, and I will respond within 24 hours.",
  },
  blogSection: {
    title: "Blogs",

  },
  addressSection: {
    title: "Address",
    subtitle:
      "290 C OPF Society, Street 30, Near Valencia",
    locality: "Lahore",
    country: "PK",
    region: "Lahore",
    postalCode: "54000",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/kMQfW6vx4PzWc3277",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "03244196491",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
