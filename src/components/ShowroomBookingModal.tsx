import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/furnitureData';
import { createShowroomBookingWhatsAppUrl } from '../utils/whatsapp';

interface ShowroomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowroomBookingModal: React.FC<ShowroomBookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('5:00 PM - 7:00 PM (Evening)');
  const [interest, setInterest] = useState('Curved Living Room Sofas & Drawing Room Setup');

  const timeSlots = [
    '12:00 PM - 2:00 PM (Afternoon)',
    '3:00 PM - 5:00 PM (Late Afternoon)',
    '5:00 PM - 7:00 PM (Evening)',
    '7:30 PM - 9:30 PM (Night)',
  ];

  const interestOptions = [
    'Curved Living Room Sofas & Drawing Room Setup',
    'Full Home Bespoke Furniture Package',
    'Master Bedroom Suite & Fluted Bed',
    'Marble/Travertine Center Tables & Chairs',
    'Bringing Architect Floor Plans for Discussion',
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createShowroomBookingWhatsAppUrl(name, preferredDate, preferredTime, interest);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141210]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FFFFFF] rounded-xl border border-[#E0D5C3] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#D5C9B8] flex items-center justify-center text-[#1C1A17] hover:bg-[#EAE0D0] transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-widest text-[#845E2A] font-bold flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            VIP Showroom Walkthrough
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#1C1A17] mt-1">
            Book a Personal Showroom Tour
          </h3>
          <p className="text-xs text-[#665D4F] mt-1">
            D Ground, Hurrian Wala Chowk, People’s Colony No. 1, Faisalabad
          </p>
        </div>

        <form onSubmit={handleBooking} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold uppercase tracking-wider text-[#3E382F] mb-1">
              Your Name
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Usman Malik"
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase tracking-wider text-[#3E382F] mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3 py-2 text-xs text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-[#3E382F] mb-1">
                Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3 py-2 text-xs text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold uppercase tracking-wider text-[#3E382F] mb-1">
              Primary Interest
            </label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#D5C9B8] rounded px-3.5 py-2.5 text-xs text-[#1C1A17] focus:outline-none focus:border-[#1C1A17]"
            >
              {interestOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="p-3 rounded bg-[#F7F2EA] border border-[#EAE1D3] text-[11px] text-[#605647]">
            <p className="flex items-center gap-1 font-semibold text-[#1C1A17]">
              <MapPin className="w-3.5 h-3.5 text-[#845E2A]" />
              Physical Location:
            </p>
            <p className="mt-0.5">{BUSINESS_INFO.address}</p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-gold-sheen w-full flex items-center justify-center gap-2 bg-[#1C1A17] text-[#FAF8F5] py-3.5 rounded font-bold text-xs uppercase tracking-wider hover:bg-[#2B2721] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Confirm Appointment via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
