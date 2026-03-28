"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Menu, X } from "lucide-react";
import { brand, services } from "../lib/site-data";
import { QuickBookingCard } from "./QuickBookingCard";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-3 text-left md:gap-4">
            <img src="/logo.jpg" alt="H2H Leisure logo" className="h-16 w-16 rounded-full object-cover md:h-40 md:w-40 md:-mb-20" />
            <div className="min-w-0">
              <div className="text-lg font-black tracking-tight text-slate-950 md:text-2xl">{brand.name}</div>
              <div className="max-w-[150px] text-xs text-slate-500 md:max-w-none md:text-sm">{brand.tagline}</div>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold md:flex">
            <Link href="/" className="whitespace-nowrap hover:text-emerald-700">Home</Link>
            <Link href="/services" className="whitespace-nowrap hover:text-emerald-700">Services</Link>
            <Link href="/booking" className="whitespace-nowrap hover:text-emerald-700">Booking</Link>
            <Link href="/faq" className="whitespace-nowrap hover:text-emerald-700">FAQ</Link>
            <Link href="/about" className="whitespace-nowrap hover:text-emerald-700">About us</Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a href={`tel:${brand.phone}`} className="hidden md:inline-flex rounded-2xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 md:text-sm">Call Us</a>
            <Link href="/booking" className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:scale-[1.02] md:px-4 md:text-sm">Book Now</Link>
            <button onClick={() => setMobileMenuOpen((open) => !open)} className="rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 md:hidden" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <a href="https://www.mobilecaravanengineers.co.uk/" target="_blank" rel="noreferrer" className="hidden md:block">
              <img src="/mcea.jpg" alt="MCEA Registered" className="h-10 w-auto" />
            </a>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm md:hidden">
            <div className="grid gap-2 text-sm font-semibold text-slate-700">
              <Link href="/" className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">Home</Link>
              <Link href="/services" className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">Services</Link>
              <Link href="/booking" className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">Booking</Link>
              <Link href="/faq" className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">FAQ</Link>
              <Link href="/about" className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">About us</Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-24 md:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-black">{brand.name}</div>
          <div className="text-sm text-slate-500">Motorhome, caravan and campervan repairs, habitation checks and mobile callouts across Craigavon and Northern Ireland.</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
          <a href={brand.facebook} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-600" aria-label="Facebook">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07C2 17.11 5.66 21.29 10.44 22v-7.06H7.9v-2.87h2.54V9.41c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.87h-2.34V22C18.34 21.29 22 17.11 22 12.07z" /></svg>
          </a>
          <Link href="/services">Services</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/about">About us</Link>
        </div>
      </div>
    </footer>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <a href={`tel:${brand.phone}`} className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900">Call</a>
        <a href={`https://wa.me/447404249203`} className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700">WhatsApp</a>
        <Link href="/booking" className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white">Book Now</Link>
      </div>
    </div>
  );
}

export function useBookingForm() {
  const [selectedService, setSelectedService] = useState("Habitation Checks");
  const [appointmentType, setAppointmentType] = useState("Mobile callout");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingLocation, setBookingLocation] = useState("");
  const [bookingDetails, setBookingDetails] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendMessage, setSendMessage] = useState("");

  const bookingSummary = useMemo(() => `${selectedService} • ${appointmentType}`, [selectedService, appointmentType]);

  const clearForm = () => {
    setBookingName("");
    setBookingPhone("");
    setBookingEmail("");
    setBookingLocation("");
    setBookingDetails("");
    setSelectedService("Habitation Checks");
    setAppointmentType("Mobile callout");
  };

  const sendBooking = async () => {
    if (!bookingName || !bookingPhone || !bookingEmail || !bookingLocation || !bookingDetails) {
      setSendMessage("Please fill in your name, phone, email, location, and a short description of the issue.");
      return;
    }

    setIsSending(true);
    setSendMessage("");

    try {
      await emailjs.send(
        "service_1jajkzi",
        "template_2p12a7p",
        {
          name: bookingName,
          phone: bookingPhone,
          email: bookingEmail,
          service: selectedService,
          location: bookingLocation,
          appointment: appointmentType,
          details: bookingDetails,
        },
        "-aYu7YznW_NvgDtQF",
      );
      setSendMessage("Booking request sent successfully. We will be in touch soon.");
      clearForm();
    } catch (error: unknown) {
      console.error("EmailJS error:", error);
      const err = error as { text?: string; message?: string };
      setSendMessage(`Something went wrong: ${err?.text || err?.message || "Unknown error"}`);
    } finally {
      setIsSending(false);
    }
  };

  return {
    services,
    selectedService,
    setSelectedService,
    appointmentType,
    setAppointmentType,
    bookingName,
    setBookingName,
    bookingPhone,
    setBookingPhone,
    bookingEmail,
    setBookingEmail,
    bookingLocation,
    setBookingLocation,
    bookingDetails,
    setBookingDetails,
    isSending,
    sendMessage,
    sendBooking,
    bookingSummary,
  };
}

export function BookingCardStandalone({ full = false }: { full?: boolean }) {
  const form = useBookingForm();
  return (
    <QuickBookingCard
      full={full}
      bookingName={form.bookingName}
      bookingPhone={form.bookingPhone}
      bookingEmail={form.bookingEmail}
      bookingLocation={form.bookingLocation}
      bookingDetails={form.bookingDetails}
      selectedService={form.selectedService}
      appointmentType={form.appointmentType}
      services={form.services}
      sendMessage={form.sendMessage}
      isSending={form.isSending}
      setBookingName={form.setBookingName}
      setBookingPhone={form.setBookingPhone}
      setBookingEmail={form.setBookingEmail}
      setBookingLocation={form.setBookingLocation}
      setBookingDetails={form.setBookingDetails}
      setSelectedService={form.setSelectedService}
      setAppointmentType={form.setAppointmentType}
      openBookingPage={() => { window.location.href = "/booking"; }}
      sendBooking={form.sendBooking}
    />
  );
}