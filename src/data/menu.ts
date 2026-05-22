export const FEATURED_COCKTAILS = [
  { name: 'Signature Margarita', description: 'House blend tequila, fresh lime, agave, tajin rim', image: '/images/cocktail-red-black-salt.jpg', featured: true },
  { name: 'Patio Spritz', description: 'Light, floral, and perfect for the elevated patio', image: '/images/cocktail-patio-pair.jpg', featured: true },
  { name: 'Cocktail Tower', description: 'Our signature pink cocktail tower — four frozen margaritas with fresh florals', image: '/images/cocktail-tower-pink.jpg', featured: true },
  { name: 'Pineapple Mezcal', description: 'Smoky mezcal, fresh pineapple, orchid garnish', image: '/images/cocktail-pineapple-rocks.jpg', featured: true },
] as const;

export const FEATURED_FOOD = [
  { name: 'Skirt Steak', description: 'Grilled skirt steak, chimichurri, arugula, pickled onion', category: 'dinner', image: '/images/food-skirt-steak.jpg' },
  { name: 'Street Tacos', description: 'Seasonal fillings, corn tortilla, cotija, micro herbs', category: 'dinner', image: '/images/food-tacos-chicken.jpg' },
  { name: 'Lobster Flatbread', description: 'Lobster, mozzarella, fresh basil, tomato', category: 'dinner', image: '/images/food-lobster-flatbread.jpg' },
  { name: 'The Spread', description: 'A full table of Coco Maya favorites — tacos, steak, seafood, and more', category: 'dinner', image: '/images/food-spread-overhead.jpg' },
] as const;

export const FEATURED_BRUNCH = [
  { name: 'Brunch Sandwich', description: 'Scrambled eggs, bacon, brioche, seasonal fruit, potato wedges', category: 'brunch', image: '/images/food-brunch-sandwich.jpg' },
  { name: 'Brunch Bowl', description: 'Two eggs, black beans, rice, corn, chorizo hash', category: 'brunch', image: '/images/food-brunch-bowl.jpg' },
  { name: 'Tacos al Fresco', description: 'Fresh tacos on the elevated patio', category: 'brunch', image: '/images/food-tacos-patio.jpg' },
  { name: 'Mushroom Pasta', description: 'Wild mushroom rigatoni, truffle cream, chives', category: 'dinner', image: '/images/food-mushroom-pasta.jpg' },
] as const;
