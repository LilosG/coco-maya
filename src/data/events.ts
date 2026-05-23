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
    slug: 'happy-hour',
    name: 'Happy Hour',
    day: 'Daily',
    time: '3:00 PM – 5:00 PM',
    highlight: 'Daily Deals',
    description: 'Discounted cocktails, wines, and select bites every day of the week. The elevated patio at its best.',
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
