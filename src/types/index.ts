export type Language = 'cs' | 'en' | 'de' | 'pl';

export interface GallerySlide {
  src: string;
  alt?: string;
}

export interface AccommodationCard {
  titleKey: string;
  descriptionKey: string;
  mainImage: string;
  features: string[];
  gallery: GallerySlide[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  arrivalDate: string;
  departureDate: string;
  numberOfPeople: string;
  notes: string;
  gdprConsent: boolean;
}

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export interface NavItem {
  labelKey: string;
  sectionId: string;
}

export interface PartnerLink {
  name: string;
  url: string;
}
