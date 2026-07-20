import { collection, config, fields, singleton } from '@keystatic/core';

import siteSettingsData from './src/content/siteSettings.json';
import navigationData from './src/content/navigation.json';
import footerData from './src/content/footer.json';
import homeData from './src/content/home.json';
import aboutData from './src/content/about.json';
import contactPageData from './src/content/contactPage.json';
import reservationsPageData from './src/content/reservationsPage.json';
import faqPageData from './src/content/faqPage.json';
import happyHourPageData from './src/content/happyHourPage.json';
import brunchPageData from './src/content/brunchPage.json';
import menuPageData from './src/content/menuPage.json';
import eventsPageData from './src/content/eventsPage.json';
import spacePageData from './src/content/spacePage.json';
import privateEventsIndexPageData from './src/content/privateEventsIndexPage.json';
import privateEventDetailDefaultsData from './src/content/privateEventDetailDefaults.json';
import blogIndexPageData from './src/content/blogIndexPage.json';
import blogPostDefaultsData from './src/content/blogPostDefaults.json';
import menuCocktailsData from './src/content/menuCocktails.json';
import menuDinnerData from './src/content/menuDinner.json';
import menuBrunchDrinksData from './src/content/menuBrunchDrinks.json';
import menuBrunchFoodData from './src/content/menuBrunchFood.json';
import recurringEventsData from './src/content/recurringEvents.json';
import privateEventTypesData from './src/content/privateEventTypes.json';
import privateEventsProcessStepsData from './src/content/privateEventsProcessSteps.json';
import privateEventsCapacitySpecsData from './src/content/privateEventsCapacitySpecs.json';
import generalFaqsData from './src/content/generalFaqs.json';
import happyHourFaqsData from './src/content/happyHourFaqs.json';
import theSpaceSectionsData from './src/content/theSpaceSections.json';

type JsonObject = Record<string, unknown>;

const labels: Record<string, string> = {
  singleton: 'Page Content', seo: 'Search Engine Settings', title: 'Title', seoTitle: 'Search Result Title',
  seoDescription: 'Search Result Description', description: 'Description', descriptionTemplate: 'Search Result Description',
  hero: 'Hero Section', heroTitleSuffix: 'Search Result Title Ending', titleSuffix: 'Search Result Title Ending',
  titleSuffixTemplate: 'Search Result Title Ending', subtitle: 'Supporting Text', subtitleTemplate: 'Supporting Text',
  label: 'Label', labelTemplate: 'Label', eyebrow: 'Small Section Label', body: 'Body Text', body1: 'First Paragraph',
  body1Template: 'First Paragraph', body2: 'Second Paragraph', body2Template: 'Second Paragraph', body3: 'Third Paragraph',
  bodyTemplate: 'Body Text', image: 'Image', heroImage: 'Hero Image', galleryImage: 'Featured Gallery Image',
  atmosphereImage: 'Atmosphere Image', patioImage: 'Patio Image', cocktailImage: 'Cocktail Image',
  imageAlt: 'Image Description for Accessibility', heroImageAlt: 'Hero Image Description for Accessibility',
  galleryImageAlt: 'Gallery Image Description for Accessibility', atmosphereImageAlt: 'Atmosphere Image Description for Accessibility',
  patioImageAlt: 'Patio Image Description for Accessibility', cocktailImageAlt: 'Cocktail Image Description for Accessibility',
  imageAltTemplate: 'Image Description for Accessibility', alt: 'Image Description for Accessibility', name: 'Name',
  fullName: 'Full Business Name', tagline: 'Tagline', brandDescription: 'Business Description', breadcrumbLabel: 'Page Trail Label',
  breadcrumbParentLabel: 'Parent Page Trail Label', breadcrumbs: 'Page Trail Labels', primaryLabel: 'Primary Button Text',
  primaryLabelTemplate: 'Primary Button Text', secondaryLabel: 'Secondary Button Text', ctaLabel: 'Button Text',
  reserveLabel: 'Reserve Button Text', menuLabel: 'Menu Button Text', directionsLabel: 'Directions Button Text',
  emailLabel: 'Email Button Text', spaceLabel: 'The Space Button Text', mapLabel: 'Map Link Text', callLabel: 'Call Button Text',
  formCtaLabel: 'Inquiry Form Button Text', formLabelTemplate: 'Inquiry Form Heading', formSubtitle: 'Inquiry Form Supporting Text',
  inquirySubtitle: 'Inquiry Form Supporting Text', order: 'Display Order', featured: 'Feature This Item', category: 'Menu Category',
  day: 'Day', days: 'Service Days', time: 'Time', highlight: 'Highlighted Detail', question: 'Question', questions: 'Questions',
  answer: 'Answer', answerTemplate: 'Answer', faqs: 'Frequently Asked Questions', faq: 'Frequently Asked Questions',
  faqTitleTemplate: 'Frequently Asked Questions Heading', stats: 'Venue Statistics', statsLabel: 'Venue Statistics Heading',
  value: 'Displayed Value', sub: 'Supporting Detail', subTemplate: 'Supporting Detail', detail: 'Supporting Detail', note: 'Note',
  icon: 'Icon', number: 'Displayed Number', step: 'Step Number', intro: 'Introduction Paragraphs', highlights: 'Highlights',
  gallery: 'Photo Gallery', specs: 'Event Details', guests: 'Guest Capacity', duration: 'Event Duration', space: 'Event Space',
  shortDescription: 'Short Description', atmosphereLine: 'Atmosphere Statement', relatedPost: 'Related Blog Post',
  reverse: 'Place Image on the Opposite Side', open: 'Open That Day', hours: 'Hours', hoursLabel: 'Hours Heading',
  closed: 'Closed Message', address: 'Address', street: 'Street Address', city: 'City', state: 'State', zip: 'ZIP Code',
  neighborhood: 'Neighborhood', full: 'Full Address', phone: 'Phone Number', display: 'Displayed Phone Number', email: 'Email Address',
  reservations: 'Reservations', inquiryForm: 'Private Event Inquiry Form', social: 'Social Media Links', instagram: 'Instagram Link',
  facebook: 'Facebook Link', yelp: 'Yelp Link', service: 'Meal Service Details', brunch: 'Brunch Details', dinner: 'Dinner Details',
  serviceMessaging: 'Shared Service Messages', openDaily: 'Open Daily Message', openDailyLower: 'Open Daily Message — Lowercase',
  openDailyInline: 'Open Daily Message — Sentence Text', brunchDailyUntil3: 'Daily Brunch Message',
  brunchPatioSummary: 'Brunch and Patio Summary', generalHoursFaq: 'General Hours Answer', brunchHoursFaq: 'Brunch Hours Answer',
  dinnerHoursFaq: 'Dinner Hours Answer', rooftopBar: 'Rooftop Bar Details', accessibility: 'Accessibility Labels',
  main: 'Main Navigation Links', footerSupplemental: 'Additional Footer Links', headings: 'Footer Headings',
  socialLabels: 'Social Media Link Text', copyrightName: 'Copyright Business Name', hospitalityLabel: 'Restaurant Group Link Text',
  homeLabel: 'Home Link Text', logoAlt: 'Logo Description for Accessibility', mobileLogoAlt: 'Mobile Logo Description for Accessibility',
  sitemap: 'Sitemap Link', credit: 'Website Credit', href: 'Link Destination', actions: 'Buttons and Links', sections: 'Menu Sections',
  infoBar: 'Quick Information Bar', infoCards: 'Information Cards', brand: 'Restaurant Introduction', cocktails: 'Cocktails Section',
  food: 'Food Section', privateEvents: 'Private Events Section', experience: 'Experience Section', story: 'Our Story Section',
  favorites: 'Brunch Favorites Section', drinks: 'Brunch Drinks Section', cards: 'Promotional Cards', features: 'Features',
  highlightsHeading: 'Highlights Heading', closerLook: 'Closer Look Section', barDetail: 'Bar Detail Section', barCtas: 'Bar Buttons',
  recurring: 'Recurring Events Heading', promos: 'Promotional Cards', process: 'Planning Process Heading', types: 'Event Types Heading',
  capacityHeading: 'Capacity and Spaces Heading', inquiry: 'Private Event Inquiry Section', emailCard: 'Email Contact Card',
  phoneCard: 'Phone Contact Card', sellingPoints: 'Reasons to Book', included: 'What Is Included', cta: 'Closing Call to Action',
  form: 'Inquiry Form Section', location: 'Location Section', findUs: 'Find Us Heading', explore: 'Explore Heading',
  allEvents: 'All Events Link Text', bookOnline: 'Book Online Link Text', reserve: 'Reservations Link Text', reserveShort: 'Short Reservations Link Text',
  startPlanning: 'Start Planning Link Text', private: 'Private Events Card', reservation: 'Reservations Card', setting: 'Setting',
  signatureLabel: 'Signature Drink Label', signatureValue: 'Signature Drink Name', signatureSub: 'Signature Drink Supporting Text',
  signatureTag: 'Signature Drink Tag', pourLabel: 'Cocktail Label', pourValue: 'Cocktail Name', pourSub: 'Cocktail Supporting Text',
  placeEyebrow: 'Location Section Label', locationLabel: 'Location Label', locationValue1: 'First Location Line',
  locationValue2: 'Second Location Line', locationSubTemplate: 'Location Supporting Text', builtForTemplate: 'Private Events Message',
  whereTag: 'Location Tag', todaySuffix: 'Today Label Ending', orderLong: 'Order Online Link Text', orderShort: 'Short Order Link Text',
  navLabel: 'Navigation Description', mainLabel: 'Main Navigation Description', openMenuLabel: 'Open Menu Button Description',
  closeMenuLabel: 'Close Menu Button Description', openLabel: 'Open Status Text', directions: 'Directions Link Text',
  rooftop: 'Rooftop Patio Link Text', logo: 'Logo', unit: 'Suite or Unit', priceRange: 'Price Range', servesCuisine: 'Cuisine Types',
  schema: 'Search Engine Business Details', geo: 'Map Coordinates', addressCountry: 'Country Code',
  url: 'Website Address', mapsUrl: 'Google Maps Link',
};

const arrayItemLabels: Record<string, string> = {
  hours: 'Hours Entry', days: 'Day', servesCuisine: 'Cuisine', main: 'Navigation Link', footerSupplemental: 'Footer Link',
  infoCards: 'Information Card', stats: 'Statistic', features: 'Feature', highlights: 'Highlight', faqs: 'Frequently Asked Question',
  gallery: 'Gallery Image', intro: 'Paragraph', sellingPoints: 'Reason to Book', sections: 'Menu Section', actions: 'Button or Link',
};

const multilineKeys = new Set([
  'description', 'descriptionTemplate', 'seoDescription', 'subtitle', 'subtitleTemplate', 'body', 'body1', 'body1Template',
  'body2', 'body2Template', 'body3', 'bodyTemplate', 'answer', 'answerTemplate', 'shortDescription', 'atmosphereLine',
  'inquirySubtitle', 'formSubtitle', 'generalHoursFaq', 'brunchHoursFaq', 'dinnerHoursFaq', 'brandDescription',
]);

const intentionallyOptionalFields = new Set([
  'home.singleton.stats',
]);

const advancedDescriptions: Record<string, string> = {
  slug: 'Connects this item to its page address. Leave unchanged unless your website team asks you to edit it.',
  id: 'Connects this content to the correct place on the website. Leave unchanged unless your website team asks you to edit it.',
  tel: 'Connects tap-to-call links to the restaurant phone number. Leave unchanged unless your website team asks you to edit it.',
  relatedPost: 'Connects this event type to a blog article. Leave unchanged unless your website team asks you to edit it.',
  type: 'Connects the business details to search engines. Leave unchanged unless your website team asks you to edit it.',
  lat: 'Connects the venue to its map location. Leave unchanged unless your website team asks you to edit it.',
  lng: 'Connects the venue to its map location. Leave unchanged unless your website team asks you to edit it.',
  addressCountry: 'Connects the address to search engine business data. Leave unchanged unless your website team asks you to edit it.',
  weekdaysSundayFirst: 'Connects daily hours to the correct calendar day. Leave unchanged unless your website team asks you to edit it.',
  reverse: 'Controls the alternating page layout. Leave unchanged unless your website team asks you to edit it.',
};

const advancedLabels: Record<string, string> = {
  slug: 'Page Address', id: 'Website Reference',
  tel: 'Tap-to-Call Phone Number', relatedPost: 'Related Blog Post Address', type: 'Business Type for Search Engines',
  lat: 'Map Latitude', lng: 'Map Longitude', addressCountry: 'Country Code for Search Engines',
  weekdaysSundayFirst: 'Calendar Day Order', reverse: 'Alternating Section Layout',
};

const humanize = (value: string) => value
  .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
  .replace(/[-_]/g, ' ')
  .replace(/\b\w/g, (character) => character.toUpperCase());

function labelFor(key: string, path: string[]) {
  if (advancedLabels[key]) return `⚠️ Advanced — ${advancedLabels[key]}`;
  const fullPath = [...path, key].join('.');
  if (fullPath.endsWith('seo.title')) return 'Search Result Title';
  if (fullPath.endsWith('seo.description')) return 'Search Result Description';
  if (fullPath.endsWith('hero.title')) return 'Main Page Heading';
  return labels[key] ?? humanize(key);
}

function descriptionFor(key: string, path: string[], value: unknown) {
  if (advancedDescriptions[key]) return advancedDescriptions[key];
  const fullPath = [...path, key].join('.');
  const label = labelFor(key, path).replace('⚠️ Advanced — ', '').toLowerCase();
  if (fullPath.endsWith('seo.title')) return 'Title shown in search results. Keep it concise and specific.';
  if (fullPath.endsWith('seo.description')) return 'Summary shown in search results. Use one clear sentence about this page.';
  if (key.toLowerCase().includes('alt')) return 'Describe what is visible in the image for screen readers and search engines.';
  if (key === 'order') return 'Controls display order. Lower numbers appear first.';
  if (Array.isArray(value)) return `Add, edit, remove, or reorder the ${label}.`;
  if (value && typeof value === 'object') return `Edit the ${label} used on the website.`;
  if (typeof value === 'boolean') return `Controls whether the ${label} setting is enabled.`;
  if (typeof value === 'number') return `Enter the number used for the ${label}.`;
  return `Edit the ${label} shown on the website.`;
}

const imageStoragePaths = new Set<string>();

/** The only image constructor in this config. Its namespace is mandatory and collision-checked. */
function imageField(namespace: string, label: string, description: string, isRequired = true) {
  if (!namespace) throw new Error('Every image field requires an explicit namespace.');
  const directory = `public/images/cms/${namespace}`;
  const publicPath = `/images/cms/${namespace}/`;
  const collisionKey = `${directory}|${publicPath}`;
  if (imageStoragePaths.has(collisionKey)) throw new Error(`Image field storage collision: ${collisionKey}`);
  imageStoragePaths.add(collisionKey);
  const options = {
    label,
    description,
    directory,
    publicPath,
    ...(isRequired ? { validation: { isRequired: true as const } } : {}),
  } as Parameters<typeof fields.image>[0];
  return fields.image(options);
}

function isImage(key: string, value: unknown) {
  return typeof value === 'string' && (key === 'image' || key.endsWith('Image'));
}

function mergeObjects(values: JsonObject[]): JsonObject {
  const result: JsonObject = {};
  for (const value of values) {
    for (const [key, child] of Object.entries(value)) {
      const current = result[key];
      if (Array.isArray(current) && Array.isArray(child)) result[key] = [...current, ...child];
      else if (current && child && typeof current === 'object' && typeof child === 'object' && !Array.isArray(current) && !Array.isArray(child)) {
        result[key] = mergeObjects([current as JsonObject, child as JsonObject]);
      } else if (current === undefined) result[key] = child;
    }
  }
  return result;
}

function itemLabel(props: any, fallback: string) {
  return props?.fields?.name?.value || props?.fields?.question?.value || props?.fields?.title?.value ||
    props?.fields?.label?.value || props?.fields?.day?.value || props?.value || fallback;
}

function schemaFromSamples(samples: JsonObject[], namespace: string, path: string[] = []): Record<string, any> {
  const sample = mergeObjects(samples);
  return Object.fromEntries(Object.entries(sample).map(([key, value]) => {
    const optional = samples.some((entry) => !(key in entry)) || intentionallyOptionalFields.has([namespace, ...path, key].join('.'));
    return [key, fieldFromSamples(key, value, samples, namespace, path, optional)];
  }));
}

function fieldFromSamples(key: string, value: unknown, parents: JsonObject[], namespace: string, path: string[], optional: boolean): any {
  const nextPath = [...path, key];
  const label = labelFor(key, path);
  const description = descriptionFor(key, path, value);
  if (isImage(key, value)) return imageField([namespace, ...nextPath].join('/'), label, description);
  if (Array.isArray(value)) {
    const arrays = parents.flatMap((parent) => Array.isArray(parent[key]) ? parent[key] as unknown[] : []);
    const objectItems = arrays.filter((item): item is JsonObject => Boolean(item) && typeof item === 'object' && !Array.isArray(item));
    const sampleItem = objectItems.length ? mergeObjects(objectItems) : arrays[0];
    const singular = arrayItemLabels[key] ?? labels[key.replace(/s$/, '')] ?? humanize(key.replace(/s$/, ''));
    const element = sampleItem && typeof sampleItem === 'object'
      ? fields.object(schemaFromSamples(objectItems, namespace, nextPath), {
          label: singular,
          description: `Edit one item in the ${label.toLowerCase()} list.`,
        })
      : typeof sampleItem === 'number'
        ? fields.number({ label: singular, description: `Enter one number in the ${label.toLowerCase()} list.`, validation: { isRequired: true } })
        : fields.text({ label: singular, description: `Enter one item in the ${label.toLowerCase()} list.`, validation: { isRequired: true } });
    return fields.array(element, {
      label,
      description,
      itemLabel: (props) => itemLabel(props, singular),
      ...(!optional && arrays.length ? { validation: { length: { min: 1 } } } : {}),
    });
  }
  if (value && typeof value === 'object') {
    const children = parents.map((parent) => parent[key]).filter((child): child is JsonObject => Boolean(child) && typeof child === 'object' && !Array.isArray(child));
    return fields.object(schemaFromSamples(children, namespace, nextPath), { label, description });
  }
  if (typeof value === 'number') {
    return optional
      ? fields.number({ label, description })
      : fields.number({ label, description, validation: { isRequired: true } });
  }
  if (typeof value === 'boolean') return fields.checkbox({ label, description, defaultValue: value });
  return fields.text({ label, description, multiline: multilineKeys.has(key), ...(!optional ? { validation: { isRequired: true } } : {}) });
}

function jsonSingleton(label: string, filename: string, sample: JsonObject) {
  return singleton({
    label,
    path: `src/content/${filename}`,
    format: { data: 'json' },
    schema: schemaFromSamples([sample], filename),
  });
}

function jsonCollection(label: string, directory: string, data: JsonObject, slugField: string, itemNameLabel: string) {
  const samples = Object.values(data) as JsonObject[];
  const schema = schemaFromSamples(samples, directory);
  const sourceValue = samples[0]?.[slugField];
  schema[slugField] = fields.slug({
    name: {
      label: itemNameLabel,
      description: descriptionFor(slugField, [], sourceValue),
      validation: { isRequired: true },
    },
  });
  return collection({
    label,
    path: `src/content/${directory}/*`,
    slugField,
    format: { data: 'json' },
    columns: [slugField, ...(schema.order ? ['order'] : [])],
    schema,
  } as any);
}

const upcomingEvents = collection({
  label: 'Upcoming Events',
  path: 'src/content/upcomingEvents/*',
  slugField: 'name',
  format: { data: 'json' },
  columns: ['name', 'date', 'order'],
  schema: {
    name: fields.slug({ name: { label: 'Event Name', description: 'Name shown for this event.', validation: { isRequired: true } } }),
    order: fields.number({ label: 'Display Order', description: 'Controls display order. Lower numbers appear first.', validation: { isRequired: true } }),
    slug: fields.text({ label: '⚠️ Advanced — Page Address', description: advancedDescriptions.slug, validation: { isRequired: true } }),
    date: fields.text({ label: 'Event Date', description: 'Enter the date shown to guests.', validation: { isRequired: true } }),
    time: fields.text({ label: 'Event Time', description: 'Enter the time shown to guests.', validation: { isRequired: true } }),
    description: fields.text({ label: 'Event Description', description: 'Describe the upcoming event.', multiline: true, validation: { isRequired: true } }),
    ticketUrl: fields.text({ label: 'Ticket Link', description: 'Optional complete web address for tickets.' }),
    image: imageField('upcomingEvents/image', 'Event Photo', 'Optional photo shown with this upcoming event.', false),
  },
});

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'gph-websites/coco-maya' },
  ui: {
    brand: { name: 'Coco Maya Website CMS' },
    navigation: {
      Website: ['home', 'about', 'contactPage', 'reservationsPage', 'faqPage', 'happyHourPage', 'brunchPage', 'menuPage', 'eventsPage', 'spacePage', 'privateEventsIndexPage', 'privateEventDetailDefaults', 'blogIndexPage', 'blogPostDefaults'],
      Menu: ['menuCocktails', 'menuDinner', 'menuBrunchDrinks', 'menuBrunchFood'],
      Events: ['recurringEvents', 'upcomingEvents', 'privateEventTypes', 'privateEventsProcessSteps', 'privateEventsCapacitySpecs'],
      FAQs: ['generalFaqs', 'happyHourFaqs'],
      'The Space': ['theSpaceSections'],
      'Site Settings': ['siteSettings', 'navigation', 'footer'],
    },
  },
  singletons: {
    siteSettings: jsonSingleton('Venue / Business Data', 'siteSettings', siteSettingsData),
    navigation: jsonSingleton('Navigation', 'navigation', navigationData),
    footer: jsonSingleton('Footer', 'footer', footerData),
    home: jsonSingleton('Home', 'home', homeData),
    about: jsonSingleton('About', 'about', aboutData),
    contactPage: jsonSingleton('Contact', 'contactPage', contactPageData),
    reservationsPage: jsonSingleton('Reservations', 'reservationsPage', reservationsPageData),
    faqPage: jsonSingleton('FAQ', 'faqPage', faqPageData),
    happyHourPage: jsonSingleton('Happy Hour', 'happyHourPage', happyHourPageData),
    brunchPage: jsonSingleton('Brunch', 'brunchPage', brunchPageData),
    menuPage: jsonSingleton('Menu Overview', 'menuPage', menuPageData),
    eventsPage: jsonSingleton('Events', 'eventsPage', eventsPageData),
    spacePage: jsonSingleton('The Space', 'spacePage', spacePageData),
    privateEventsIndexPage: jsonSingleton('Private Events', 'privateEventsIndexPage', privateEventsIndexPageData),
    privateEventDetailDefaults: jsonSingleton('Private Event Detail Defaults', 'privateEventDetailDefaults', privateEventDetailDefaultsData),
    blogIndexPage: jsonSingleton('Blog', 'blogIndexPage', blogIndexPageData),
    blogPostDefaults: jsonSingleton('Blog Post Defaults', 'blogPostDefaults', blogPostDefaultsData),
  },
  collections: {
    menuCocktails: jsonCollection('Cocktails', 'menuCocktails', menuCocktailsData, 'name', 'Drink Name'),
    menuDinner: jsonCollection('Dinner', 'menuDinner', menuDinnerData, 'name', 'Dish Name'),
    menuBrunchDrinks: jsonCollection('Brunch Drinks', 'menuBrunchDrinks', menuBrunchDrinksData, 'name', 'Drink Name'),
    menuBrunchFood: jsonCollection('Brunch Food', 'menuBrunchFood', menuBrunchFoodData, 'name', 'Dish Name'),
    recurringEvents: jsonCollection('Recurring Events', 'recurringEvents', recurringEventsData, 'name', 'Event Name'),
    upcomingEvents,
    privateEventTypes: jsonCollection('Private Event Types', 'privateEventTypes', privateEventTypesData, 'name', 'Event Type Name'),
    privateEventsProcessSteps: jsonCollection('Private Events Process Steps', 'privateEventsProcessSteps', privateEventsProcessStepsData, 'label', 'Step Name'),
    privateEventsCapacitySpecs: jsonCollection('Private Events Capacity', 'privateEventsCapacitySpecs', privateEventsCapacitySpecsData, 'label', 'Capacity Name'),
    generalFaqs: jsonCollection('General FAQs', 'generalFaqs', generalFaqsData, 'question', 'Question'),
    happyHourFaqs: jsonCollection('Happy Hour FAQs', 'happyHourFaqs', happyHourFaqsData, 'question', 'Question'),
    theSpaceSections: jsonCollection('Space Sections', 'theSpaceSections', theSpaceSectionsData, 'title', 'Section Title'),
  },
});
