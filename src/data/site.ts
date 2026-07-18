export const SITE = {
  name: 'Coco Maya',
  fullName: 'Coco Maya by Miss B\'s',
  tagline: 'Modern American Coastal Dining in Little Italy, San Diego',
  description: 'Modern American coastal cuisine, craft cocktails, and San Diego\'s best brunch. Coco Maya by Miss B\'s in Little Italy at 1660 India St.',
  url: 'https://inlovewiththecoco.com',

  address: {
    street: '1660 India St',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    neighborhood: 'Little Italy',
    full: '1660 India St, San Diego, CA 92101',
    mapsUrl: 'https://maps.google.com/?q=1660+India+St+San+Diego+CA+92101',
  },

  phone: {
    display: '(762) 475-8756',
    tel: '+17624758756',
  },

  email: 'info@inlovewiththecoco.com',

  reservations: {
    url: 'https://tables.toasttab.com/restaurants/179fe648-b771-40b6-a75f-9cb86f67a3e4/findTime',
    label: 'Reserve a Table',
  },

  inquiryForm: {
    url: 'https://www.toasttab.com/invoice/lead?rx=179fe648-b771-40b6-a75f-9cb86f67a3e4&ot=25f16565-a67d-463c-ad37-b0ffb59c64e5&form=1',
  },

  order: {
    url: 'https://order.toasttab.com/online/cocomaya-1660-india-st',
    label: 'Order Online',
  },

  hours: [
    { day: 'Monday',    open: true,  hours: '10:30 AM – 8:00 PM' },
    { day: 'Tuesday',   open: true,  hours: '10:30 AM – 8:00 PM' },
    { day: 'Wednesday', open: true,  hours: '10:30 AM – 8:00 PM' },
    { day: 'Thursday',  open: true,  hours: '10:30 AM – 8:00 PM' },
    { day: 'Friday',    open: true,  hours: '9:00 AM – 12:00 AM' },
    { day: 'Saturday',  open: true,  hours: '9:00 AM – 12:00 AM' },
    { day: 'Sunday',    open: true,  hours: '9:00 AM – 8:00 PM' },
  ],

  rooftopBar: {
    tagline: 'Open Daily',
    detail: 'Elevated Patio & Glass Atrium',
  },

  // Service periods within the main operating hours above. Brunch and dinner
  // both run every day of the week (per Google Business Profile hours) — this
  // is NOT a weekend-only offering. Keep in sync with GBP if hours change.
  service: {
    brunch: {
      label: 'Daily Brunch',
      tagline: 'Served daily, until 3:00 PM',
      shortTagline: 'Daily · Until 3PM',
      days: [
        { day: 'Sunday',    hours: '9:00 AM – 3:00 PM' },
        { day: 'Monday',    hours: '10:30 AM – 3:00 PM' },
        { day: 'Tuesday',   hours: '10:30 AM – 3:00 PM' },
        { day: 'Wednesday', hours: '10:30 AM – 3:00 PM' },
        { day: 'Thursday',  hours: '10:30 AM – 3:00 PM' },
        { day: 'Friday',    hours: '9:00 AM – 3:00 PM' },
        { day: 'Saturday',  hours: '9:00 AM – 3:00 PM' },
      ],
    },
    dinner: {
      label: 'Dinner',
      tagline: 'Served nightly from 5:00 PM',
      shortTagline: 'Nightly from 5PM',
      days: [
        { day: 'Sunday',    hours: '5:00 PM – 8:00 PM' },
        { day: 'Monday',    hours: '5:00 PM – 8:00 PM' },
        { day: 'Tuesday',   hours: '5:00 PM – 8:00 PM' },
        { day: 'Wednesday', hours: '5:00 PM – 8:00 PM' },
        { day: 'Thursday',  hours: '5:00 PM – 8:00 PM' },
        { day: 'Friday',    hours: '5:00 PM – 10:30 PM' },
        { day: 'Saturday',  hours: '5:00 PM – 10:30 PM' },
      ],
    },
  },

  social: {
    instagram: 'https://instagram.com/cocomayasd',
    facebook:  'https://facebook.com/cocomayasd',
    yelp:      'https://yelp.com/biz/coco-maya-san-diego',
  },

  nav: [
    { label: 'Menu',           href: '/menu' },
    { label: 'Brunch',         href: '/brunch' },
    { label: 'Events',         href: '/events' },
    { label: 'Private Events', href: '/private-events' },
    { label: 'The Space',      href: '/the-space' },
    { label: 'Blog',           href: '/blog' },
    { label: 'About',          href: '/about' },
  ],

  schema: {
    type: 'Restaurant',
    priceRange: '$$$',
    servesCuisine: ['Modern American', 'Coastal', 'Seafood', 'Brunch'],
    geo: { lat: 32.7245, lng: -117.1699 },
  },
} as const;
