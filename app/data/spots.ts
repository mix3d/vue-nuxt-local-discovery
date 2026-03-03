import type { Spot } from '~/types/spot'

export const spots: Spot[] = [
  {
    id: '1',
    name: 'The Corner Brew',
    category: 'cafe',
    description: 'Cozy neighborhood coffee shop with house-roasted beans and a sunny patio.',
    address: '124 Oak Street',
    neighborhood: 'Riverside',
    tip: 'Try the honey lavender latte on weekends.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'
  },
  {
    id: '2',
    name: 'Mill Creek Park',
    category: 'park',
    description: 'Green space with walking trails, a pond, and picnic areas. Great for morning runs.',
    address: '450 Mill Creek Rd',
    neighborhood: 'Downtown',
    tip: 'The east side is quieter before 9am.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
  },
  {
    id: '3',
    name: 'Vintage Finds',
    category: 'shop',
    description: 'Curated vintage furniture and home goods. Rotating stock every few weeks.',
    address: '88 Market Lane',
    neighborhood: 'Old Town',
    tip: 'Ask about the back room for unlisted pieces.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800'
  },
  {
    id: '4',
    name: 'Summer Jazz in the Square',
    category: 'event',
    description: 'Free outdoor jazz concerts every Friday evening in City Square.',
    address: 'City Square',
    neighborhood: 'Downtown',
    tip: 'Bring a blanket and arrive by 6pm for a good spot.',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800'
  },
  {
    id: '5',
    name: 'Green Leaf Kitchen',
    category: 'cafe',
    description: 'Plant-based cafe with seasonal menus and a small garden out back.',
    address: '201 Pine Ave',
    neighborhood: 'Riverside',
    tip: 'The weekend brunch bowl sells out by 11.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800'
  },
  {
    id: '6',
    name: 'Lakeside Trail',
    category: 'park',
    description: 'Paved path around the lake, about 2 miles. Dog-friendly and stroller-friendly.',
    address: 'Lakeside Dr',
    neighborhood: 'West End',
    tip: 'Sunset views from the north dock are worth the extra walk.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
  }
]

export const categoryLabels: Record<Spot['category'], string> = {
  cafe: 'Cafes',
  park: 'Parks',
  shop: 'Shops',
  event: 'Events'
}
