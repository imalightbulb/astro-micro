import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "imalightbulb",
  DESCRIPTION: "A twist on the Astro Micro theme.",
  EMAIL: "hhungxunqaq@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my articles.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Stuff I'm working on.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/im_alightbulb",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/imalightbulb",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/heah-hung-xun-8234571b1/",
  },
];
