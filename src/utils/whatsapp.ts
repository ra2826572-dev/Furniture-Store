import { BUSINESS_INFO } from '../data/furnitureData';
import { CustomInquiryState, Product } from '../types';

export function createGeneralWhatsAppUrl(customMessage?: string): string {
  const defaultText = 'Hi Sheheryar, I am visiting your website and would like to know more about your luxury furniture collection and showroom in D Ground Faisalabad.';
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${message}`;
}

export function createProductWhatsAppUrl(product: Product, selectedFinish?: string): string {
  const finishText = selectedFinish ? ` in "${selectedFinish}"` : '';
  const text = `Hi Sheheryar, I am interested in "${product.name}"${finishText} from your website. Could you please share the pricing, customization options, and availability at your D Ground showroom?`;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function createCustomCommissionWhatsAppUrl(inquiry: CustomInquiryState): string {
  const text = `*Custom Furniture Inquiry - Furniture Store By Sheheryar*
• Room: ${inquiry.roomType || 'Living / Drawing'}
• Piece Required: ${inquiry.pieceType || 'Custom Curved Sofa'}
• Preferred Style: ${inquiry.preferredStyle || 'Contemporary Luxury'}
• Dimensions/Room Size: ${inquiry.dimensionsNote || 'Standard'}
• Fabric/Material Preference: ${inquiry.fabricPreference || 'Bouclé / Velvet'}
• Color Tone: ${inquiry.colorTone || 'Neutral Beige / Off-White'}
• Special Notes: ${inquiry.specialRequests || 'Looking for personalized recommendation'}

Hi, please share estimated pricing and timeline for this bespoke piece.`;

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function createShowroomBookingWhatsAppUrl(name: string, date: string, time: string, notes: string): string {
  const text = `*Showroom Visit Appointment Request*
• Name: ${name || 'Client'}
• Preferred Date: ${date || 'Upcoming Weekend'}
• Preferred Time: ${time || 'Afternoon / Evening'}
• Interest: ${notes || 'Touring living room & sofa collections'}

Hi Sheheryar, I would like to schedule a visit to your D Ground showroom.`;

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
}
