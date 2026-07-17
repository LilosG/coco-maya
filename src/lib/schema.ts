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
