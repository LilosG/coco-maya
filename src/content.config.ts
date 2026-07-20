import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const jsonCollection = (path: string) =>
  defineCollection({
    loader: file(path),
  });

const jsonEntryCollection = (base: string) =>
  defineCollection({
    loader: glob({ pattern: "**/*.json", base }),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    eventCTA: z
      .object({
        title: z.string(),
        subtitle: z.string().optional(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string().optional(),
        secondaryHref: z.string().optional(),
        formLabel: z.string(),
        formSubtitle: z.string().optional(),
      })
      .optional(),
  }),
});

const siteSettings = jsonCollection("./src/content/siteSettings.json");
const navigation = jsonCollection("./src/content/navigation.json");
const footer = jsonCollection("./src/content/footer.json");
const home = jsonCollection("./src/content/home.json");
const about = jsonCollection("./src/content/about.json");
const contactPage = jsonCollection("./src/content/contactPage.json");
const reservationsPage = jsonCollection("./src/content/reservationsPage.json");
const faqPage = jsonCollection("./src/content/faqPage.json");
const happyHourPage = jsonCollection("./src/content/happyHourPage.json");
const brunchPage = jsonCollection("./src/content/brunchPage.json");
const menuPage = jsonCollection("./src/content/menuPage.json");
const eventsPage = jsonCollection("./src/content/eventsPage.json");
const spacePage = jsonCollection("./src/content/spacePage.json");
const privateEventsIndexPage = jsonCollection("./src/content/privateEventsIndexPage.json");
const privateEventDetailDefaults = jsonCollection("./src/content/privateEventDetailDefaults.json");
const blogIndexPage = jsonCollection("./src/content/blogIndexPage.json");
const blogPostDefaults = jsonCollection("./src/content/blogPostDefaults.json");

const menuCocktails = jsonEntryCollection("./src/content/menuCocktails");
const menuDinner = jsonEntryCollection("./src/content/menuDinner");
const menuBrunchDrinks = jsonEntryCollection("./src/content/menuBrunchDrinks");
const menuBrunchFood = jsonEntryCollection("./src/content/menuBrunchFood");
const recurringEvents = jsonEntryCollection("./src/content/recurringEvents");
const upcomingEvents = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/upcomingEvents" }),
  schema: z.object({
    order: z.number().optional(),
    slug: z.string(),
    name: z.string(),
    date: z.string(),
    time: z.string(),
    description: z.string(),
    ticketUrl: z.string().optional(),
    image: z.string().optional(),
  }),
});
const privateEventTypes = jsonEntryCollection("./src/content/privateEventTypes");
const privateEventsProcessSteps = jsonEntryCollection("./src/content/privateEventsProcessSteps");
const privateEventsCapacitySpecs = jsonEntryCollection("./src/content/privateEventsCapacitySpecs");
const generalFaqs = jsonEntryCollection("./src/content/generalFaqs");
const happyHourFaqs = jsonEntryCollection("./src/content/happyHourFaqs");
const theSpaceSections = jsonEntryCollection("./src/content/theSpaceSections");

export const collections = {
  blog,
  siteSettings,
  navigation,
  footer,
  home,
  about,
  contactPage,
  reservationsPage,
  faqPage,
  happyHourPage,
  brunchPage,
  menuPage,
  eventsPage,
  spacePage,
  privateEventsIndexPage,
  privateEventDetailDefaults,
  blogIndexPage,
  blogPostDefaults,
  menuCocktails,
  menuDinner,
  menuBrunchDrinks,
  menuBrunchFood,
  recurringEvents,
  upcomingEvents,
  privateEventTypes,
  privateEventsProcessSteps,
  privateEventsCapacitySpecs,
  generalFaqs,
  happyHourFaqs,
  theSpaceSections,
};
