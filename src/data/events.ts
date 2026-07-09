export const RECURRING_EVENTS = [
  {
    slug: 'brunch',
    name: 'Weekend Brunch',
    day: 'Saturday & Sunday',
    time: '11:00 AM – 3:00 PM',
    highlight: 'Weekend Only',
    description: 'San Diego\'s best brunch in Little Italy. Bottomless options, modern coastal plates, and craft cocktails on the elevated patio.',
    image: '/images/food-brunch-sandwich.jpg',
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
