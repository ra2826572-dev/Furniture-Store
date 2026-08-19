export interface Product {
  id: string;
  name: string;
  category: 'sofas' | 'living' | 'bedroom' | 'tables' | 'chairs' | 'custom';
  tagline: string;
  image: string;
  secondaryImage?: string;
  description: string;
  dimensionsPlaceholder: string;
  materialsPlaceholder: string;
  finishOptionsPlaceholder: string[];
  isCurvedOrSculptural?: boolean;
  featured?: boolean;
  badge?: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: 'sofas' | 'living' | 'bedroom' | 'tables' | 'chairs' | 'custom';
  itemCountPlaceholder: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  highlight: string;
  verifiedOnGoogle: boolean;
}

export interface CustomInquiryState {
  roomType: string;
  pieceType: string;
  preferredStyle: string;
  dimensionsNote: string;
  fabricPreference: string;
  colorTone: string;
  specialRequests: string;
}
