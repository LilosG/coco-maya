export const SITE = {
  name: 'Coco Maya',
  fullName: 'Coco Maya by Miss B\'s',
  tagline: 'Elevated Coastal Mexican Dining in Little Italy, San Diego',
  description: 'Elevated coastal Mexican cuisine, craft cocktails, and San Diego\'s best brunch. Coco Maya by Miss B\'s in Little Italy at 1660 India St.',
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
    display: '(619) 943-9439',
    tel: '+16199439439',
  },

  email: 'info@inlovewiththecoco.com',

  reservations: {
    url: 'https://tables.toasttab.com/restaurants/179fe648-b771-40b6-a75f-9cb86f67a3e4/findTime',
    label: 'Reserve a Table',
  },

  order: {
    url: 'https://inlovewiththecoco.com/order',
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

  happyHour: {
    days: 'Daily',
    hours: '3:00 PM – 5:00 PM',
  },

  brunch: {
    days: 'Saturday & Sunday',
    hours: '11:00 AM – 3:00 PM',
  },

  social: {
    instagram: 'https://instagram.com/cocomayasd',
    facebook:  'https://facebook.com/cocomayasd',
    yelp:      'https://yelp.com/biz/coco-maya-san-diego',
  },

  nav: [
    { label: 'Menu',           href: '/menu' },
    { label: 'Brunch',         href: '/brunch' },
    { label: 'Happy Hour',     href: '/happy-hour' },
    { label: 'Events',         href: '/events' },
    { label: 'Private Events', href: '/private-events' },
    { label: 'The Space',      href: '/the-space' },
    { label: 'About',          href: '/about' },
  ],

  schema: {
    type: 'Restaurant',
    priceRange: '$$$',
    servesCuisine: ['Mexican', 'Coastal', 'American', 'Brunch'],
    geo: { lat: 32.7245, lng: -117.1699 },
  },
} as const;
