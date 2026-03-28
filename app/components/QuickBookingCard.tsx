"use client";

import React from "react";
import type { Service } from "../lib/site-data";

type QuickBookingCardProps = {
  full?: boolean;
  bookingName: string;
  bookingPhone: string;
  bookingEmail: string;
  bookingLocation: string;
  bookingDetails: string;
  selectedService: string;
  appointmentType: string;
  services: Service[];
  sendMessage: string;
  isSending: boolean;
  setBookingName: React.Dispatch<React.SetStateAction<string>>;
  setBookingPhone: React.Dispatch<React.SetStateAction<string>>;
  setBookingEmail: React.Dispatch<React.SetStateAction<string>>;
  setBookingLocation: React.Dispatch<React.SetStateAction<string>>;
  setBookingDetails: React.Dispatch<React.SetStateAction<string>>;
  setSelectedService: React.Dispatch<React.SetStateAction<string>>;
  setAppointmentType: React.Dispatch<React.SetStateAction<string>>;
  openBookingPage: () => void;
  sendBooking: () => void;
};

export const QuickBookingCard = React.memo(function QuickBookingCard({
  full = false,
  bookingName,
  bookingPhone,
  bookingEmail,
  bookingLocation,
  bookingDetails,
  selectedService,
  appointmentType,
  services,
  sendMessage,
  isSending,
  setBookingName,
  setBookingPhone,
  setBookingEmail,
  setBookingLocation,
  setBookingDetails,
  setSelectedService,
  setAppointmentType,
  openBookingPage,
  sendBooking,
}: QuickBookingCardProps) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Quick booking</div>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Request a repair or inspection</h2>

      <div className={`mt-5 grid gap-3 ${full ? "md:grid-cols-2" : ""}`}>
        <input value={bookingName} onChange={(e) => setBookingName(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white" placeholder="Full name" />
        <input value={bookingPhone} onChange={(e) => setBookingPhone(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white" placeholder="Phone" />
        <input value={bookingEmail} onChange={(e) => setBookingEmail(e.target.value)} className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white ${full ? "md:col-span-2" : ""}`} placeholder="Email" />
        <input value={bookingLocation} onChange={(e) => setBookingLocation(e.target.value)} className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white ${full ? "md:col-span-2" : ""}`} placeholder="Location / postcode" />

        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white">
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>

        <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white">
          <option>Mobile callout</option>
          <option>Phone consultation first</option>
        </select>

        <textarea value={bookingDetails} onChange={(e) => setBookingDetails(e.target.value)} className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white ${full ? "min-h-[140px] md:col-span-2" : "min-h-[90px]"}`} placeholder={full ? "Describe the issue, any leak points, appliances involved, or anything useful to know..." : "Briefly describe the issue..."} />

        {sendMessage ? (
          <div className={`rounded-2xl px-4 py-3 text-sm font-medium ${full ? "md:col-span-2" : ""} ${sendMessage.startsWith("Booking request sent") ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
            {sendMessage}
          </div>
        ) : null}

        <button onClick={full ? sendBooking : openBookingPage} disabled={isSending} className={`rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 ${full ? "md:col-span-2" : ""}`}>
          {isSending ? "Sending..." : full ? "Submit booking request" : "Continue booking"}
        </button>
      </div>
    </div>
  );
});