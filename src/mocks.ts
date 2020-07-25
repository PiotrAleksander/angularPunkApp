import { Beer } from './models/index';

export const BEERS: Beer[] = [
  {
    id: 192,
    name: 'Punk IPA 2007 - 2010',
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    first_brewed: '04/2007',
    description:
      "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
    image_url: 'https://images.punkapi.com/v2/192.png',
    abv: 6.0,
    ibu: 60.0,
    target_fg: 1010.0,
    target_og: 1056.0,
    ebc: 17.0,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: 'liters',
    },
    food_pairing: [
      'Spicy carne asada with a pico de gallo sauce',
      'Shredded chicken tacos with a mango chilli lime salsa',
      'Cheesecake with a passion fruit swirl sauce',
    ],
  },
  {
    id: 141,
    name: 'Cap Dog (w/ Cap Brewery)',
    tagline: 'Black Cascara IPA.',
    first_brewed: '08/2014',
    description:
      'A collaboration by BrewDog and CAP with Cascara green unroasted cherry coffee beans.',
    image_url: 'https://images.punkapi.com/v2/141.png',
    abv: 9,
    ibu: 80,
    target_fg: 1014,
    target_og: 1083,
    ebc: 180,
    srm: 90,
    ph: 5.2,
    attenuation_level: 83.1,
    volume: { value: 20, unit: 'litres' },
    food_pairing: [
      'Chilli con carne',
      'Pepper jack cheese burger on a brioche bun',
      'Coffee cake',
    ],
  },
];
