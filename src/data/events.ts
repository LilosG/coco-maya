export const RECURRING_EVENTS = [
  {
    slug: 'brunch',
    name: 'Daily Brunch',
    day: 'Every Day',
    time: 'Until 3:00 PM',
    highlight: 'Served Daily',
    description: 'San Diego\'s best brunch in Little Italy. Modern coastal plates and craft cocktails on the elevated patio, served every day of the week.',
    image: '/images/food-brunch-sandwich.jpg',
  },
  {
    slug: 'dinner',
    name: 'Dinner',
    day: 'Every Day',
    time: 'From 5:00 PM',
    highlight: 'Served Nightly',
    description: 'Modern American coastal dinner service every night of the week, on the elevated patio or in the glass atrium dining room.',
    image: '/images/food-prime-ribeye.jpg',
  },
  {
    slug: 'rooftop-bar',
    name: 'Rooftop Patio & Bar',
    day: 'Daily',
    time: 'Open Daily',
    highlight: 'Anytime',
    description: 'Craft cocktails and the elevated glass atrium patio, open every day of the week for walk-ins and reservations alike.',
    image: '/images/cocktail-patio-pair.jpg',
  },
] as const;

export const UPCOMING_EVENTS: {
  slug: string;
  name: string;
  date: string;
  time: string;
  description: string;
  ticketUrl?: string;
}[] = [];
