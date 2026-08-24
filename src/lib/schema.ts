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

const DAY_INDEX: Record<string, number> = {
  Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6,
};

/**
 * Returns the America/Los_Angeles UTC offset (e.g. "-07:00") for a given
 * date, correctly accounting for daylight saving time.
 */
function laUtcOffset(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    timeZoneName: "shortOffset",
  }).formatToParts(date);
  const raw = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT-8";
  const hours = parseInt(raw.replace("GMT", ""), 10) || -8;
  return `${hours >= 0 ? "+" : "-"}${String(Math.abs(hours)).padStart(2, "0")}:00`;
}

/**
 * Finds the next upcoming date (today or later) that falls on one of the
 * given days of week, and returns it as an ISO 8601 datetime at the given
 * "HH:MM" time with the correct America/Los_Angeles offset. Used as the
 * required startDate/endDate anchor for an ongoing weekly recurring event
 * -- eventSchedule communicates the recurrence, this just gives Google a
 * concrete, valid next occurrence to anchor to.
 */
function nextOccurrenceISO(daysOfWeek: string[], time: string): string {
  const targetDays = daysOfWeek.map((d) => DAY_INDEX[d]);
  const [hh, mm] = time.split(":").map(Number);
  const now = new Date();
  for (let i = 0; i < 8; i++) {
    const candidate = new Date(now);
    candidate.setDate(now.getDate() + i);
    if (targetDays.includes(candidate.getDay())) {
      const y = candidate.getFullYear();
      const m = String(candidate.getMonth() + 1).padStart(2, "0");
      const d = String(candidate.getDate()).padStart(2, "0");
      const timeStr = `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}:00`;
      return `${y}-${m}-${d}T${timeStr}${laUtcOffset(candidate)}`;
    }
  }
  return now.toISOString();
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
 *
 * Google's Event structured data requires a top-level startDate even when
 * eventSchedule is used for recurrence ("The startDate property is
 * required to help identify the unique event" -- Google never wants it
 * removed, even for cancelled events). startDate/endDate here are computed
 * as the next upcoming occurrence, giving Google a concrete, always-valid
 * anchor date without claiming a false historical start.
 */
export function recurringEventSchema(input: RecurringEventInput) {
  const startDate = nextOccurrenceISO(input.daysOfWeek, input.startTime);
  const endDate = nextOccurrenceISO(input.daysOfWeek, input.endTime);
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: input.name,
    description: input.description,
    url: input.url,
    startDate,
    endDate,
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
