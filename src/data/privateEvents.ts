import type { FaqItem } from "../lib/schema";

export interface PrivateEventType {
  slug: string;
  name: string;
  shortDescription: string;
  eyebrow: string;
  heroImage: string;
  heroImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  highlights: string[];
  galleryImage: string;
  galleryImageAlt: string;
  faqs: FaqItem[];
}

export const PRIVATE_EVENT_TYPES: PrivateEventType[] = [
  {
    slug: "bachelorette-parties",
    name: "Bachelorette Parties",
    eyebrow: "Bachelorette Parties in Little Italy",
    shortDescription:
      "The elevated patio, the pink cocktail tower, the view. A bachelorette setting that delivers.",
    heroImage: "/images/cocktail-tower-pink.jpg",
    heroImageAlt: "Signature pink cocktail tower for a bachelorette party at Coco Maya Little Italy San Diego",
    seoTitle: "Bachelorette Party Venue in Little Italy San Diego | Coco Maya",
    seoDescription:
      "Host your bachelorette party on Coco Maya's elevated patio in Little Italy, San Diego. Cocktail towers, custom packages, and a view worth the photos. 1660 India St.",
    intro: [
      "Coco Maya's elevated patio was built for exactly this kind of celebration. Open-air, glass atrium bar, and a signature pink cocktail tower that shows up in every photo from the day.",
      "We build bachelorette packages around your group size and vibe, whether that's a relaxed brunch send-off or a full evening buyout with the patio to yourselves.",
    ],
    highlights: [
      "Signature cocktail towers and champagne service",
      "Reserved patio or semi-private sections for groups of 10+",
      "Custom brunch or dinner menus",
      "Photo-ready backdrop with skyline and greenery",
      "Dedicated event coordinator for the day",
    ],
    galleryImage: "/images/cocktail-group-five.jpg",
    galleryImageAlt: "Bachelorette party group with cocktails on the Coco Maya patio in Little Italy",
    faqs: [
      {
        question: "What's the minimum group size for a bachelorette party at Coco Maya?",
        answer:
          "We can accommodate parties starting around 8 to 10 guests in a reserved patio section, up to full patio buyouts of 120 for larger celebrations.",
      },
      {
        question: "Can we do brunch instead of an evening event?",
        answer:
          "Yes, weekend brunch (Saturday and Sunday, 11 AM to 3 PM) is one of our most popular bachelorette bookings, with bottomless drink options available.",
      },
      {
        question: "Do you offer decor or photo setups?",
        answer:
          "We can coordinate light decor and work with outside vendors for photography or florals. Let us know what you have in mind when you inquire.",
      },
    ],
  },
  {
    slug: "birthday-celebrations",
    name: "Birthday Celebrations",
    eyebrow: "Birthday Parties in Little Italy",
    shortDescription:
      "Custom menus, private dining room, and a space that makes the occasion feel like one.",
    heroImage: "/images/events-private-dining-1.jpg",
    heroImageAlt: "Private dining room set up for a birthday celebration at Coco Maya Little Italy San Diego",
    seoTitle: "Birthday Party Venue in Little Italy San Diego | Coco Maya",
    seoDescription:
      "Celebrate a birthday at Coco Maya's private dining room or elevated patio in Little Italy, San Diego. Custom menus and drink packages for any size group.",
    intro: [
      "From an intimate dinner for ten to a full patio takeover, our private dining room and elevated patio flex to match the celebration you have in mind.",
      "We handle custom menus, drink packages, and the small details, birthday cake included, so you can actually be at your own party instead of running it.",
    ],
    highlights: [
      "Private dining room for intimate celebrations",
      "Full patio buyout for larger parties",
      "Custom menus and drink packages",
      "Cake service coordination",
      "Flexible timing for lunch, dinner, or late-night",
    ],
    galleryImage: "/images/venue-interior-dining.jpg",
    galleryImageAlt: "Coco Maya indoor dining room set up for a private birthday celebration",
    faqs: [
      {
        question: "How far in advance should we book a birthday party?",
        answer:
          "We recommend booking 3 to 4 weeks out for weekend dates, though we can often accommodate shorter notice for smaller groups on weekdays.",
      },
      {
        question: "Can you accommodate a birthday cake?",
        answer:
          "Yes, you're welcome to bring in a cake, and our team can coordinate storage and service timing for you.",
      },
      {
        question: "Is there a minimum spend for private dining room bookings?",
        answer:
          "Minimum spends vary by day of week and time slot. Email us with your date and headcount and we'll send exact numbers with your proposal.",
      },
    ],
  },
  {
    slug: "rehearsal-dinners",
    name: "Rehearsal Dinners",
    eyebrow: "Rehearsal Dinners in Little Italy",
    shortDescription:
      "Intimate pre-wedding gatherings with custom menus and the full Coco Maya experience.",
    heroImage: "/images/events-table-setting.jpg",
    heroImageAlt: "Elegant table setting for a rehearsal dinner at Coco Maya Little Italy San Diego",
    seoTitle: "Rehearsal Dinner Venue in Little Italy San Diego | Coco Maya",
    seoDescription:
      "Host your rehearsal dinner at Coco Maya in Little Italy, San Diego. Private dining, custom menus, and a coastal setting the night before your wedding.",
    intro: [
      "The night before the wedding deserves its own atmosphere, warm, personal, and a little less formal than the big day. Our private dining room and patio both work well for rehearsal dinners of 15 to 60 guests.",
      "We build a custom menu around your families' preferences and keep the evening moving so toasts, dinner, and conversation all have their moment.",
    ],
    highlights: [
      "Private dining room seating up to 60",
      "Custom multi-course menus",
      "Wine and cocktail pairing options",
      "Space for toasts and speeches",
      "Coordination with your wedding planner if you have one",
    ],
    galleryImage: "/images/food-lobster-flatbread.jpg",
    galleryImageAlt: "Lobster flatbread and coastal cuisine served at a Coco Maya rehearsal dinner",
    faqs: [
      {
        question: "Can Coco Maya accommodate a rehearsal dinner with 50+ guests?",
        answer:
          "Yes, our private dining room comfortably holds up to 60 guests, and we can extend into patio space for larger rehearsal dinners.",
      },
      {
        question: "Do you offer plated or family-style menus?",
        answer:
          "Both are available. Many rehearsal dinners choose family-style service to keep the evening relaxed and conversational.",
      },
      {
        question: "Can we coordinate with our wedding planner directly?",
        answer:
          "Absolutely. We're glad to work directly with your planner or day-of coordinator to align on timing, seating, and any special requests.",
      },
    ],
  },
  {
    slug: "corporate-events",
    name: "Corporate Events",
    eyebrow: "Corporate Events in Little Italy",
    shortDescription:
      "Team dinners and client entertaining in a space that makes an impression.",
    heroImage: "/images/events-private-dining-2.jpg",
    heroImageAlt: "Corporate event dining setup at Coco Maya Little Italy San Diego",
    seoTitle: "Corporate Event Venue in Little Italy San Diego | Coco Maya",
    seoDescription:
      "Book Coco Maya for your next corporate event, team dinner, or client entertaining in Little Italy, San Diego. Private dining, AV support, and custom packages.",
    intro: [
      "Whether it's a quarterly team dinner or entertaining an out-of-town client, Coco Maya gives you a private setting with real character, not another hotel ballroom.",
      "We handle menu customization, timing around presentations or toasts, and AV needs so the logistics stay invisible and the evening runs smoothly.",
    ],
    highlights: [
      "Private dining room and patio options",
      "AV support available for presentations",
      "Custom menus with dietary accommodations",
      "Group billing and invoicing available",
      "Daytime and evening availability",
    ],
    galleryImage: "/images/venue-atrium-bar.jpg",
    galleryImageAlt: "Coco Maya glass atrium bar area used for corporate event entertaining",
    faqs: [
      {
        question: "Can Coco Maya provide a single invoice for corporate billing?",
        answer:
          "Yes, we can set up centralized billing and provide itemized invoices for expense reporting and reimbursement.",
      },
      {
        question: "Is AV equipment available for presentations?",
        answer:
          "We can support basic AV needs in the private dining room. Let us know your requirements in advance so we can confirm setup.",
      },
      {
        question: "Do you host daytime corporate events?",
        answer:
          "Yes, we're open daily starting at 10:30 AM (9 AM Friday through Sunday), which works well for breakfast meetings or midday team gatherings.",
      },
    ],
  },
  {
    slug: "baby-showers",
    name: "Baby Showers",
    eyebrow: "Baby Showers in Little Italy",
    shortDescription:
      "Daytime social gatherings with brunch menus and the lush patio atmosphere.",
    heroImage: "/images/venue-patio.jpg",
    heroImageAlt: "Coco Maya elevated patio set up for a daytime baby shower in Little Italy San Diego",
    seoTitle: "Baby Shower Venue in Little Italy San Diego | Coco Maya",
    seoDescription:
      "Host a baby shower on Coco Maya's elevated patio in Little Italy, San Diego. Brunch menus, daytime availability, and a bright, photo-friendly setting.",
    intro: [
      "Our elevated patio in daylight is one of the prettiest settings in Little Italy for a daytime celebration, bright, open-air, and full of greenery.",
      "We build baby shower packages around brunch and lunch menus, with room for games, gifts, and the group photo everyone actually wants.",
    ],
    highlights: [
      "Bright, open-air patio setting",
      "Brunch and lunch menu options",
      "Reserved sections for groups of 10 to 40",
      "Space for gifts and games",
      "Non-alcoholic drink packages available",
    ],
    galleryImage: "/images/food-brunch-bowl.jpg",
    galleryImageAlt: "Brunch bowl served at a Coco Maya baby shower celebration",
    faqs: [
      {
        question: "What time of day works best for a baby shower?",
        answer:
          "Weekend brunch (11 AM to 3 PM) or a weekday late-morning to early-afternoon slot both work well, giving you natural light on the patio.",
      },
      {
        question: "Can you accommodate a mix of alcoholic and non-alcoholic guests?",
        answer:
          "Yes, we offer mocktail and non-alcoholic drink packages alongside our full cocktail and wine menu.",
      },
      {
        question: "Is there space for gift tables or a small setup area?",
        answer:
          "Yes, we can reserve space for a gift table or small decor setup within your section. Mention it when you inquire so we can plan the layout.",
      },
    ],
  },
  {
    slug: "evening-buyouts",
    name: "Evening Buyouts",
    eyebrow: "Full Venue Buyouts in Little Italy",
    shortDescription:
      "The patio after dark. City lights, tropical greenery, and the Little Italy skyline.",
    heroImage: "/images/events-patio-night.jpg",
    heroImageAlt: "Coco Maya patio at night during a full venue buyout in Little Italy San Diego",
    seoTitle: "Full Venue Buyout in Little Italy San Diego | Coco Maya Evening Events",
    seoDescription:
      "Book a full evening buyout at Coco Maya in Little Italy, San Diego. Private access to the entire patio, atrium bar, and dining room for up to 180 guests.",
    intro: [
      "For events that call for the whole space, a full buyout gives you exclusive access to the patio, glass atrium bar, and indoor dining room after hours.",
      "This is the option most large celebrations, launch parties, and milestone events land on, private access, custom programming, and the Little Italy skyline as your backdrop.",
    ],
    highlights: [
      "Exclusive access to patio, bar, and dining room",
      "Capacity up to 180 guests",
      "Custom menus, drink packages, and bar setup",
      "Flexible programming, DJ or live music available",
      "Dedicated event team for the full evening",
    ],
    galleryImage: "/images/venue-neon-sign.jpg",
    galleryImageAlt: "Coco Maya neon sign lit up during a full evening venue buyout",
    faqs: [
      {
        question: "What's the capacity for a full venue buyout?",
        answer:
          "A full buyout, combining the patio, atrium bar, and indoor dining room, accommodates up to 180 guests.",
      },
      {
        question: "Can we bring in a DJ or live music?",
        answer:
          "Yes, we can coordinate DJ or live music setups for full buyouts. Let us know your plans so we can confirm space and timing.",
      },
      {
        question: "How far in advance do we need to book a full buyout?",
        answer:
          "Full buyouts typically require 6 to 8 weeks' notice, especially for weekend dates, given the scale of planning involved.",
      },
    ],
  },
];

export function getPrivateEventType(slug: string) {
  return PRIVATE_EVENT_TYPES.find((e) => e.slug === slug);
}
