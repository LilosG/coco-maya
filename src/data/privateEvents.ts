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
  specs: {
    guests: string;
    duration: string;
    space: string;
  };
  highlights: { label: string; detail: string }[];
  galleryImage: string;
  galleryImageAlt: string;
  gallery: { image: string; alt: string }[];
  atmosphereImage: string;
  atmosphereImageAlt: string;
  atmosphereLine: string;
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
      "Most groups book a reserved section of the patio for a few hours, order off a custom drink and small-bites package, and let us handle the rest, timing, seating, and a coordinator who's actually paying attention to your group all day.",
    ],
    specs: {
      guests: "8 – 120",
      duration: "2 – 3 hours",
      space: "Patio or Buyout",
    },
    highlights: [
      { label: "Signature Cocktail Tower", detail: "Four frozen margaritas built around fresh florals, the centerpiece of nearly every bachelorette table here." },
      { label: "Reserved Patio Section", detail: "A dedicated section of the elevated patio for groups of 10 or more, separated from regular seating." },
      { label: "Custom Brunch or Dinner Menu", detail: "Build a package around brunch, happy hour, or a full dinner, whatever fits your day." },
      { label: "Photo-Ready Backdrop", detail: "Skyline views, greenery, and the glass atrium bar, all built for the group photo everyone actually wants." },
      { label: "Dedicated Event Coordinator", detail: "One person on our team owns your event from arrival to last call, so nothing falls through." },
    ],
    galleryImage: "/images/cocktail-group-five.jpg",
    galleryImageAlt: "Bachelorette party group with cocktails on the Coco Maya patio in Little Italy",
    gallery: [
      { image: "/images/cocktail-group-five.jpg", alt: "Bachelorette party group with cocktails on the Coco Maya patio" },
      { image: "/images/venue-patio-skyline.jpg", alt: "Coco Maya patio with Little Italy skyline view for bachelorette parties" },
      { image: "/images/cocktail-negroni-patio.jpg", alt: "Craft cocktail service on the patio at a Coco Maya bachelorette event" },
    ],
    atmosphereImage: "/images/venue-patio-skyline.jpg",
    atmosphereImageAlt: "Coco Maya elevated patio at golden hour with Little Italy skyline",
    atmosphereLine: "Golden hour on the patio, skyline behind you, cocktail tower on the table.",
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
      {
        question: "Is there a deposit required to hold the date?",
        answer:
          "Reserved sections and buyouts require a deposit to confirm your date. We'll walk you through exact terms once we have your headcount and date.",
      },
      {
        question: "Can we bring our own decorations, like a sash or banner?",
        answer:
          "Yes, small personal decor (sashes, banners, table confetti) is welcome. For anything larger, check with us first so we can plan placement around the space.",
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
      "Milestone birthdays tend to book the full patio or a full buyout, while smaller, more intimate celebrations usually land in the private dining room, warmer, quieter, and still connected to the bar.",
    ],
    specs: {
      guests: "10 – 180",
      duration: "2 – 4 hours",
      space: "Room, Patio, or Venue",
    },
    highlights: [
      { label: "Private Dining Room", detail: "An intimate, semi-enclosed space for smaller celebrations, connected to the main bar without being exposed to it." },
      { label: "Full Patio Buyout", detail: "For milestone birthdays, take over the entire elevated patio for the night." },
      { label: "Custom Menus & Drink Packages", detail: "Build a plated, family-style, or passed-apps menu around your group's taste and budget." },
      { label: "Cake Service", detail: "Bring your own cake, we'll handle storage, plating, and timing so it lands at the right moment." },
      { label: "Flexible Timing", detail: "Lunch, dinner, or late-night, we can build around whichever fits your celebration." },
    ],
    galleryImage: "/images/venue-interior-dining.jpg",
    galleryImageAlt: "Coco Maya indoor dining room set up for a private birthday celebration",
    gallery: [
      { image: "/images/venue-interior-dining.jpg", alt: "Coco Maya indoor private dining room for birthday celebrations" },
      { image: "/images/food-spread-overhead.jpg", alt: "Full table spread of Coco Maya dishes for a birthday party" },
      { image: "/images/cocktail-coupe-foam.jpg", alt: "Craft cocktail service for a birthday celebration at Coco Maya" },
    ],
    atmosphereImage: "/images/venue-bar-to-patio.jpg",
    atmosphereImageAlt: "Coco Maya bar opening onto the patio for a birthday celebration",
    atmosphereLine: "Indoors or out, the party moves with you, bar to patio, without missing a beat.",
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
      {
        question: "Can we bring in outside decor or a party planner?",
        answer:
          "Yes, we regularly work alongside outside decorators and planners. Loop them into your inquiry so we can coordinate setup timing together.",
      },
      {
        question: "Do you offer kid-friendly options for family birthday parties?",
        answer:
          "Yes, our kitchen can build a family-friendly menu alongside the regular offering for celebrations with guests of all ages.",
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
      "Many couples use the rehearsal dinner to introduce two families for the first time. We keep the room warm and the pacing relaxed, plated or family-style, so the focus stays on the people at the table.",
    ],
    specs: {
      guests: "15 – 60",
      duration: "3 hours",
      space: "Private Dining Room",
    },
    highlights: [
      { label: "Private Dining Room", detail: "Seats up to 60 guests, with room to extend into patio seating for larger rehearsal dinners." },
      { label: "Custom Multi-Course Menu", detail: "Plated or family-style, built around what both families actually want to eat." },
      { label: "Wine & Cocktail Pairings", detail: "A curated pairing option for a more formal dinner service, if that's the tone you're after." },
      { label: "Space for Toasts", detail: "Room laid out so speeches and toasts have a natural moment, not an awkward interruption." },
      { label: "Planner Coordination", detail: "We work directly with your wedding planner or day-of coordinator on timing and seating." },
    ],
    galleryImage: "/images/food-lobster-flatbread.jpg",
    galleryImageAlt: "Lobster flatbread and coastal cuisine served at a Coco Maya rehearsal dinner",
    gallery: [
      { image: "/images/food-lobster-flatbread.jpg", alt: "Lobster flatbread served at a Coco Maya rehearsal dinner" },
      { image: "/images/venue-interior-dining.jpg", alt: "Private dining room set for a rehearsal dinner at Coco Maya" },
      { image: "/images/cocktail-wine-glass-burgundy.jpg", alt: "Wine service for a rehearsal dinner at Coco Maya Little Italy" },
    ],
    atmosphereImage: "/images/venue-arch-patio.jpg",
    atmosphereImageAlt: "Coco Maya archway patio setting for an intimate rehearsal dinner",
    atmosphereLine: "Warm light, a table set for toasts, the night before everything changes.",
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
      {
        question: "Can we do a wine or cocktail pairing for the dinner?",
        answer:
          "Yes, we can build a curated wine or cocktail pairing alongside your menu for a more formal rehearsal dinner service.",
      },
      {
        question: "Is the private dining room fully separated from the rest of the restaurant?",
        answer:
          "It's a semi-private space connected to the main venue, giving you a dedicated area for your group while still being part of Coco Maya's atmosphere.",
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
      "Corporate bookings range from a breakfast meeting for ten to a full evening buyout for a company-wide gathering. Either way, we build the package around your schedule, not the other way around.",
    ],
    specs: {
      guests: "10 – 100",
      duration: "2 – 3 hours",
      space: "Private Room or Patio",
    },
    highlights: [
      { label: "Private Dining or Patio", detail: "Choose an enclosed space for a focused meeting, or the patio for a more relaxed team dinner." },
      { label: "AV Support", detail: "Basic AV setup available in the private dining room for presentations or toasts." },
      { label: "Custom Menus", detail: "Dietary accommodations built in, no one on your team gets left with the same three options." },
      { label: "Group Billing", detail: "Centralized invoicing and itemized receipts for expense reporting, handled on our end." },
      { label: "Daytime Availability", detail: "Open daily from 10:30 AM (9 AM Fri–Sun), which works well for breakfast meetings or midday gatherings." },
    ],
    galleryImage: "/images/venue-atrium-bar.jpg",
    galleryImageAlt: "Coco Maya glass atrium bar area used for corporate event entertaining",
    gallery: [
      { image: "/images/venue-atrium-bar.jpg", alt: "Coco Maya glass atrium bar used for corporate entertaining" },
      { image: "/images/food-spread-overhead.jpg", alt: "Full table spread for a corporate dinner at Coco Maya" },
      { image: "/images/venue-bar-detail.jpg", alt: "Bar detail at Coco Maya, private venue for corporate events" },
    ],
    atmosphereImage: "/images/venue-space-hero.jpg",
    atmosphereImageAlt: "Coco Maya venue space set up for a corporate event in Little Italy",
    atmosphereLine: "A space with real character, built for client dinners that don't feel like client dinners.",
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
      {
        question: "Can you accommodate a mix of dietary restrictions across a large group?",
        answer:
          "Yes, our kitchen regularly builds menus that account for vegetarian, gluten-conscious, and other dietary needs across a full group.",
      },
      {
        question: "Is Wi-Fi available for a working lunch or meeting?",
        answer:
          "Yes, Wi-Fi is available throughout the venue, suitable for a working lunch or a meeting that runs alongside the meal.",
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
      "Most baby showers book a reserved patio section for a late-morning to early-afternoon window, giving the group natural light for photos and enough time to eat, open gifts, and actually visit.",
    ],
    specs: {
      guests: "10 – 40",
      duration: "2 – 3 hours",
      space: "Reserved Patio",
    },
    highlights: [
      { label: "Bright, Open-Air Patio", detail: "Daylight setting with greenery, one of the more photogenic daytime spaces in Little Italy." },
      { label: "Brunch & Lunch Menus", detail: "Build a package around our brunch or lunch offerings, suited to a daytime celebration." },
      { label: "Reserved Section", detail: "A dedicated section of the patio for groups of 10 to 40 guests." },
      { label: "Space for Gifts & Games", detail: "We can lay out a gift table or small activity area within your reserved section." },
      { label: "Non-Alcoholic Packages", detail: "Mocktail and non-alcoholic drink options alongside the full cocktail and wine list." },
    ],
    galleryImage: "/images/food-brunch-bowl.jpg",
    galleryImageAlt: "Brunch bowl served at a Coco Maya baby shower celebration",
    gallery: [
      { image: "/images/food-brunch-bowl.jpg", alt: "Brunch bowl served at a Coco Maya baby shower" },
      { image: "/images/elevated-patio.jpg", alt: "Elevated patio set up for a daytime baby shower at Coco Maya" },
      { image: "/images/food-brunch-sandwich.jpg", alt: "Brunch sandwich plate served at a Coco Maya baby shower celebration" },
    ],
    atmosphereImage: "/images/venue-patio-exterior.jpg",
    atmosphereImageAlt: "Coco Maya patio exterior in daylight for a baby shower celebration",
    atmosphereLine: "Daylight, greenery, and a patio that photographs as well as it feels to sit on.",
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
      {
        question: "Can we bring our own cake or desserts?",
        answer:
          "Yes, outside cakes and desserts are welcome for baby showers. Let us know ahead of time so we can coordinate storage and service.",
      },
      {
        question: "Is the patio shaded or fully open-air?",
        answer:
          "The elevated patio is open-air with some covered areas. We can discuss seating placement based on time of day and weather when you book.",
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
      "Because a buyout closes the venue to regular service, we build the evening entirely around your event, arrival flow, bar setup, music, and food timing all planned together rather than slotted into a normal night of service.",
    ],
    specs: {
      guests: "80 – 180",
      duration: "4 – 5 hours",
      space: "Full Venue",
    },
    highlights: [
      { label: "Exclusive Full Access", detail: "The entire patio, glass atrium bar, and indoor dining room, closed to the public for your event." },
      { label: "Capacity up to 180", detail: "Room for large celebrations, launch parties, and milestone events at full scale." },
      { label: "Custom Bar & Menu Setup", detail: "Build the drink program and menu from scratch around your event, not our regular offering." },
      { label: "DJ or Live Music", detail: "We coordinate space and timing for outside DJs or live music acts for full buyouts." },
      { label: "Dedicated Event Team", detail: "A full team assigned to your event for the evening, not split with regular service." },
    ],
    galleryImage: "/images/venue-neon-sign.jpg",
    galleryImageAlt: "Coco Maya neon sign lit up during a full evening venue buyout",
    gallery: [
      { image: "/images/venue-neon-sign.jpg", alt: "Coco Maya neon sign during a full evening venue buyout" },
      { image: "/images/cocktail-negroni-patio.jpg", alt: "Craft cocktail service on the patio during a Coco Maya buyout" },
      { image: "/images/venue-bar-patio.jpg", alt: "Coco Maya bar and patio at night during a full venue buyout" },
    ],
    atmosphereImage: "/images/venue-hero-bar.jpg",
    atmosphereImageAlt: "Coco Maya glass atrium bar lit up at night for a full venue buyout",
    atmosphereLine: "The whole venue, after dark, built entirely around your event.",
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
      {
        question: "Can we build a fully custom menu and bar for the buyout?",
        answer:
          "Yes, full buyouts typically come with a custom menu and bar program built specifically for your event rather than our regular offering.",
      },
      {
        question: "Do buyouts include the indoor dining room as well as the patio?",
        answer:
          "Yes, a full buyout includes exclusive access to the patio, glass atrium bar, and indoor dining room together.",
      },
    ],
  },
];

export function getPrivateEventType(slug: string) {
  return PRIVATE_EVENT_TYPES.find((e) => e.slug === slug);
}
