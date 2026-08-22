export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface RecurringEventInput {
  name: string;
  description: string;
  url: string;
  daysOfWeek: string[]; // e.g. ["Monday", "Tuesday", ...]
  startTime: string; // 24hr "HH:MM"
  endTime: string; // 24hr "HH:MM"
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  placeName: string;
}

/**
 * Builds a schema.org Event with a recurring weekly eventSchedule, for
 * ongoing specials like a weekday happy hour. Distinct from the sitewide
 * Restaurant schema's general opening hours -- this tells search engines
 * and AI answer engines (AEO/GEO) about the specific recurring offer
 * itself, not just when the doors are open.
 */
export function recurringEventSchema(input: RecurringEventInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    description: input.description,
    url: input.url,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    eventSchedule: {
      "@type": "Schedule",
      byDay: input.daysOfWeek.map((d) => `https://schema.org/${d}`),
      startTime: input.startTime,
      endTime: input.endTime,
      scheduleTimezone: "America/Los_Angeles",
      repeatFrequency: "P1W",
    },
    location: {
      "@type": "Place",
      name: input.placeName,
      address: {
        "@type": "PostalAddress",
        ...input.address,
      },
    },
    offers: {
      "@type": "Offer",
      url: input.url,
      availability: "https://schema.org/InStock",
    },
  };
}

export interface MenuSectionInput {
  name: string;
  items: readonly { name: string; description?: string; image?: string }[];
}

/**
 * Builds a schema.org Menu with MenuSection/MenuItem entries.
 * Used to give search engines and AI answer engines (AEO/GEO) structured
 * access to what's actually served, not just marketing copy.
 */
export function menuSchema(sections: MenuSectionInput[], siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Coco Maya Menu",
    hasMenuSection: sections.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        ...(item.image ? { image: `${siteUrl}${item.image}` } : {}),
      })),
    })),
  };
}
