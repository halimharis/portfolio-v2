export const PATH = {
  PROFILE: "/",
  WORKS: "/works",
  CONTACT: "/contact",
};

export const translation_en = {
  homePage: {
    sectionOne: {
      title: "ABDUL HARIS HALIM",
      subtitle: "SOFTWARE DEV.",
      paragraph:
        "A FRONTEND ENGINEER. A BACKEND ENGINEER. A DESIGNER AND A FULLSTACK WEBSITE DEVELOPER.",
    },
    sectionTwo: {
      title: "Hello World!",
      subtitle: "Halim, Abdul, or maybe Haris, Call Me Anything!",
      paragraph:
        "I'm a web developer with a passion for ui design and animation. I love crafting beautiful and engaging user interfaces. I find it incredibly rewarding to build interfaces that are both beautiful and functional. Don't get me wrong though, I also know my way around the back-end, so I can handle the full web development process.",
    },
  },
  contactPage: {
    title: "SAY HELLO!",
    subtitle: "don't need to be formal, text me anything!",
  },
  workPage: {
    title: "Driven by Passion",
    subtitle: "Defined by Results",
  },
};

export const QUESTIONS = [
  {
    label: "What's Your Name?",
    placeholder: "Haris Halim",
  },
  {
    label: "What's Your Email?",
    placeholder: "haris@halim.com",
  },
  {
    label: "What's Your Phone Number?",
    placeholder: "+62 123456789",
  },
  {
    label: "What services are you looking for?",
    placeholder: "Web Development, Web Design",
  },
  {
    label: "Tell us more about your project",
    placeholder: "Hi, can you help me with...",
  },
];

export const WORKS = [
  {
    project: "Raiz-App",
    field: "Development",
    year: "Continue",
  },
  {
    project: "Raiz Marketing Site",
    field: "Development",
    year: "Continue",
  },
  {
    project: "AI Code Helper for VS Code",
    field: "Development",
    year: 2025,
  },
  {
    project: "Raiz Blog",
    field: "Development",
    year: 2024,
  },
  {
    project: "Hexpharm Jaya Sparepart",
    field: "Development",
    year: 2023,
  },
  {
    project: "Second Portfolio",
    field: "Development",
    year: 2022,
  },
  {
    project: "Informatics Staff Websites",
    field: "Development",
    year: 2022,
  },
  {
    project: "First Portfolio",
    field: "Development",
    year: 2022,
  },
];

export interface ContactItemType {
  label: string;
  url: string;
}

export interface ContactSectionType {
  title: string;
  items: ContactItemType[];
}

export const CONTACT_CONTENT: ContactSectionType[] = [
  {
    title: "Contact Details",
    items: [{ label: "Email", url: "mailto:halimharis15@gmail.com" }],
  },
  {
    title: "Socials",
    items: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/halimharis/" },
      { label: "Github", url: "https://github.com/halimharis" },
      { label: "Instagram", url: "https://www.instagram.com/halimmharis/" },
    ],
  },
];
