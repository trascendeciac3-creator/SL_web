
import { Event, RecurringGroup, ShopItem } from './types';

export const SEED_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Beach Rosary & Sunrise',
    description: 'Gather for a morning Rosary on the sand at San Buenaventura State Beach, followed by coffee and fellowship.',
    start: new Date(new Date().setHours(7, 0, 0, 0)),
    end: new Date(new Date().setHours(9, 0, 0, 0)),
    parishName: 'San Buenaventura State Beach',
    address: '901 San Pedro St',
    city: 'Ventura',
    county: 'Ventura',
    lat: 34.2721,
    lng: -119.2801,
    tags: ['Rosary', 'Beach', 'Prayer'],
    type: 'Prayer',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Ventura Theology on Tap',
    description: 'Deep dive into Catholic Social Teaching over local craft beers. All Ventura young adults welcome.',
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
    parishName: 'Transmission Brewing',
    address: '1098 E Front St',
    city: 'Ventura',
    county: 'Ventura',
    lat: 34.2798,
    lng: -119.2861,
    tags: ['Talk', 'Social', 'Theology'],
    type: 'Social',
    imageUrl: 'https://images.unsplash.com/photo-1514525253344-f814d874591a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'St. Thomas YA Potluck',
    description: 'Community dinner and game night following the evening Mass. Bring a dish to share!',
    start: new Date(new Date().setDate(new Date().getDate() + 5)),
    end: new Date(new Date().setDate(new Date().getDate() + 5)),
    parishName: 'St. Thomas Aquinas Church',
    address: '185 St Thomas Dr',
    city: 'Ojai',
    county: 'Ventura',
    lat: 34.4367,
    lng: -119.2312,
    tags: ['Community', 'Dinner', 'Social'],
    type: 'Social',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Ventura River Trail Hike',
    description: 'An active morning of hiking and outdoor prayer along the beautiful river trail.',
    start: new Date(new Date().setDate(new Date().getDate() + 7)),
    end: new Date(new Date().setDate(new Date().getDate() + 7)),
    parishName: 'River Trailhead',
    address: 'Foster Park',
    city: 'Ventura',
    county: 'Ventura',
    lat: 34.3541,
    lng: -119.3094,
    tags: ['Hiking', 'Active', 'Service'],
    type: 'Service',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
  }
];

export const RECURRING_GROUPS: RecurringGroup[] = [
  {
    id: 'g1',
    name: 'Ventura Catholic YA',
    description: 'The central hub for young adults in the city of Ventura focused on spiritual growth.',
    county: 'Ventura',
    focus: 'Prayer/Social',
    website: 'https://venturacatholicya.org'
  },
  {
    id: 'g2',
    name: 'TAC Alumni Network',
    description: 'A dedicated group of Thomas Aquinas College alumni living and working in Ventura County.',
    county: 'Ventura',
    focus: 'Study/Fellowship',
    website: 'https://thomasaquinas.edu'
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: 's1',
    name: 'Signature Lamb Hoodie',
    price: '$55',
    category: 'Apparel',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    name: 'Unity Cotton Tee',
    price: '$32',
    category: 'Apparel',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800'
  }
];
