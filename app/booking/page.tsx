
"use client";
import { BookingCardStandalone, Footer, Header, MobileStickyBar, useBookingForm } from "../components/SiteShell";

function BookingPageClient() {
  const form = useBookingForm();

  return (
    <section id="booking" className="bg-gradient-to-br from-sky-100 via-white to-amber-50">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-12">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Booking page</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight">Book your repair or inspection</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Fill in the details below and H2H Leisure can review the job, get in touch, and arrange the next step.</p>

          <div className="mt-8">
            <BookingCardStandalone full />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Booking summary</div>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Selected job</div>
                <div className="mt-1 text-xl font-black text-white">{form.selectedService}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Appointment type</div>
                <div className="mt-1 text-base font-semibold text-white">{form.appointmentType}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Overview</div>
                <div className="mt-1 text-base font-semibold text-white">{form.bookingSummary}</div>
              </div>
            </div>
          </div>

          <div id="contact" className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Need a quick answer?</div>
            <h2 className="mt-2 text-2xl font-black tracking-tight">Call or WhatsApp instead</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">For urgent leaks, faults, or sending photos, the fastest route is still a call or WhatsApp message.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="tel:+447404249203" className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Call +447404249203</a>
              <a href="https://wa.me/447404249203" className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <BookingPageClient />
      <Footer />
      <MobileStickyBar />
    </div>
  );
}