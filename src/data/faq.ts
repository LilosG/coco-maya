import type { FaqItem } from "../lib/schema";
import { SITE } from "./site";

export const GENERAL_FAQS: FaqItem[] = [
  {
    question: "Do I need a reservation at Coco Maya?",
    answer:
      "Reservations are strongly recommended, especially for brunch and Friday or Saturday evenings. You can book a table online through our reservation system, and walk-ins are welcome based on availability.",
  },
  {
    question: "What are Coco Maya's hours?",
    answer:
      "We're open daily. Monday through Thursday from 10:30 AM to 8:00 PM, Friday and Saturday from 9:00 AM to 12:00 AM, and Sunday from 9:00 AM to 8:00 PM. We don't currently run a discounted happy hour, but the rooftop patio and full cocktail program are available all day, every day, no special time window required.",
  },
  {
    question: "When is brunch served?",
    answer:
      "Brunch is served daily until 3:00 PM, featuring modern coastal brunch plates and bottomless drink options on the elevated patio. Start times vary by day: 9:00 AM on Saturday and Sunday, 10:30 AM Monday and Tuesday, and 11:00 AM Wednesday through Friday.",
  },
  {
    question: "When is dinner served?",
    answer:
      "Dinner is served nightly starting at 5:00 PM. Sunday through Thursday dinner service runs until 8:00 PM, and Friday and Saturday it runs until 10:30 PM.",
  },
  {
    question: "Is Coco Maya good for large groups?",
    answer:
      "Yes. Beyond regular dining, we host private and semi-private events for groups of 20 up to a full venue buyout of 180 guests. See our Private Events page for capacity details and how to book.",
  },
  {
    question: "Is there parking near Coco Maya?",
    answer:
      "Coco Maya is located at 1660 India St in Little Italy, San Diego. Street parking and nearby public lots are available, and the neighborhood is walkable from most Little Italy hotels.",
  },
  {
    question: "Does Coco Maya have outdoor seating?",
    answer:
      "Yes. Our elevated open-air patio is one of the most distinctive spaces in Little Italy, alongside a glass atrium bar and an indoor dining room for cooler evenings.",
  },
  {
    question: "Can I host a private event at Coco Maya?",
    answer:
      "Yes. We host bachelorette parties, birthday celebrations, rehearsal dinners, corporate events, baby showers, and full evening buyouts. Email us at info@inlovewiththecoco.com with your date and group size to start planning.",
  },
  {
    question: "Does Coco Maya accommodate dietary restrictions?",
    answer:
      "Our kitchen can accommodate most dietary needs, including vegetarian and gluten-conscious requests. Let your server know when you arrive, or note any restrictions when booking a private event.",
  },
  {
    question: "Is Coco Maya dog-friendly?",
    answer:
      "Well-behaved dogs are welcome on our outdoor patio. Please keep pets leashed and clear of walkways for other guests.",
  },
  {
    question: "How do I contact Coco Maya directly?",
    answer:
      `Call us at ${SITE.phone.display} or email info@inlovewiththecoco.com. For private events, include your preferred date and headcount so we can respond with availability.`,
  },
];
