
export type County = 'Ventura';

export type EventType = 'Prayer' | 'Social' | 'Service' | 'Study';

export interface Event {
  id: string;
  title: string;
  description: string;
  start: Date;
  end: Date;
  parishName: string;
  address: string;
  city: string;
  county: County;
  lat: number;
  lng: number;
  sourceUrl?: string;
  tags: string[];
  type: EventType;
  imageUrl?: string;
}

export interface RecurringGroup {
  id: string;
  name: string;
  description: string;
  county: County;
  focus: string;
  contact?: string;
  website?: string;
}

export interface ShopItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  category: 'Apparel' | 'Home' | 'Accessories';
}
