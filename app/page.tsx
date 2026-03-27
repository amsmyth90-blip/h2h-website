"use client";

import React, { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  CheckCircle2,
  Clock3,
  MapPin,
  Menu,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

type PageView = "home" | "booking" | "faq" | "team" | "services";

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  badge: string;
};

type Faq = {
  q: string;
  a: string;
};

type Testimonial = {
  name: string;
  text: string;
};

export default function MotorhomeRepairWebsite() {
  const brand = {
    name: "H2H Leisure",
    tagline: "Motorhome, Caravan & Campervan Repairs & Maintenance",
    phone: "+447404249203",
    email: "hello@h2hleisure.co.uk",
  };

  const services: Service[] = [
    {
      title: "Habitation Checks",
      desc: "Full internal and external checks covering damp, gas, electrics, water systems, ventilation, and key appliances.",
      icon: <CheckCircle2 className="h-6 w-6" />,
      badge: "Essential",
    },
    {
      title: "Pre-purchase Inspections",
      desc: "Detailed inspections before buying, highlighting any issues, damp, faults, or concerns so you can make an informed decision.",
      icon: <CheckCircle2 className="h-6 w-6" />,
      badge: "Recommended",
    },
    {
      title: "Water Leaks & Seal Repairs",
      desc: "Tracing water ingress, resealing joints, and repairing leak-related damage before it spreads.",
      icon: <ShieldCheck className="h-6 w-6" />,
      badge: "Popular",
    },
    {
      title: "Solar Panel Install",
      desc: "Installation support for solar upgrades, fitted neatly and practically for life on the road.",
      icon: <Wrench className="h-6 w-6" />,
      badge: "Upgrade",
    },
    {
      title: "Fridge, Heating & Boiler Repairs",
      desc: "Diagnosis and repair of fridges, heating systems, and boilers to keep everything running properly.",
      icon: <Wrench className="h-6 w-6" />,
      badge: "Essential",
    },
    {
      title: "Skylights & Windows",
      desc: "Repairs, resealing and replacements for skylights and windows to keep your vehicle watertight and secure.",
      icon: <Wrench className="h-6 w-6" />,
      badge: "Popular",
    },
    {
      title: "Awning & Step Repairs",
      desc: "Repairs and adjustments for awnings, steps, and everyday wear-and-tear issues.",
      icon: <Calendar className="h-6 w-6" />,
      badge: "Popular",
    },
    {
      title: "Cupboards, Fittings & More",
      desc: "Interior repair work for cupboards, hinges, fittings, fixtures, and similar issues inside the van.",
      icon: <Clock3 className="h-6 w-6" />,
      badge: "Interior",
    },
    {
      title: "Mobile Callouts",
      desc: "A fully mobile service across Craigavon and roughly a 15-mile radius. We come to you where practical.",
      icon: <MapPin className="h-6 w-6" />,
      badge: "Mobile",
    },
    {
      title: "Emergency Callout",
      desc: "Urgent callouts for appliance breakdowns, leaks, or issues that need immediate attention.",
      icon: <Clock3 className="h-6 w-6" />,
      badge: "Urgent",
    },
  ];

  const faqs: Faq[] = [
    {
      q: "Do you offer a mobile service?",
      a: "Yes. H2H Leisure is a fully mobile service covering Craigavon and approximately a 15-mile radius.",
    },
    {
      q: "What vehicles do you work on?",
      a: "Motorhomes, caravans, and campervans for a wide range of repairs, maintenance jobs, habitation checks, and fitting work.",
    },
    {
      q: "Can I contact you through WhatsApp?",
      a: "Yes. WhatsApp is ideal for quick enquiries, sending photos, and discussing faults before booking.",
    },
    {
      q: "What areas do you cover?",
      a: "We are based in Craigavon and cover roughly a 15-mile radius including Lurgan, Portadown, Banbridge, Armagh, Dungannon, Moira, Lisburn, and surrounding areas. We can also cover all other areas of Northern Ireland, though an additional travel charge may apply. If you are unsure, just get in touch and we will confirm.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Mobile repair customer",
      text: "Great service from first message to final repair. Quick response, easy to deal with, and really handy that he comes out to you.",
    },
    {
      name: "Habitation check customer",
      text: "Professional and thorough. Everything was explained clearly and the check gave us real peace of mind before travelling.",
    },
    {
      name: "Leak repair customer",
      text: "Tracked down a water leak that had been causing trouble for ages. Solid job and no fuss.",
    },
  ];

  const [pageView, setPageView] = useState<PageView>("home");
  const [selectedService, setSelectedService] = useState("Habitation Checks");
  const [appointmentType, setAppointmentType] = useState("Mobile callout");
  const [preferredDay, setPreferredDay] = useState("As soon as possible");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingDetails, setBookingDetails] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendMessage, setSendMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bookingSummary = useMemo(
    () => `${selectedService} • ${appointmentType} • ${preferredDay}`,
    [selectedService, appointmentType, preferredDay],
  );

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openHomePage = () => {
    setPageView("home");
    setMobileMenuOpen(false);
    scrollTop();
  };

  const openBookingPage = () => {
    setPageView("booking");
    setMobileMenuOpen(false);
    scrollTop();
  };

  const openFaqPage = () => {
    setPageView("faq");
    setMobileMenuOpen(false);
    scrollTop();
  };

  const openTeamPage = () => {
    setPageView("team");
    setMobileMenuOpen(false);
    scrollTop();
  };

  const openServicesPage = () => {
    setPageView("services");
    setMobileMenuOpen(false);
    scrollTop();
  };

  const openHomeServices = () => {
    setPageView("home");
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (typeof window !== "undefined") {
        document.getElementById("services")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  };

  const clearForm = () => {
    setBookingName("");
    setBookingPhone("");
    setBookingEmail("");
    setBookingDetails("");
    setSelectedService("Habitation Checks");
    setAppointmentType("Mobile callout");
    setPreferredDay("As soon as possible");
  };

  const buildWhatsAppUrl = (prefilled?: string) => {
    const message =
      prefilled ||
      `Hello, I would like to enquire about ${selectedService}. Name: ${bookingName || ""}. Phone: ${bookingPhone || ""}. Email: ${bookingEmail || ""}. Appointment type: ${appointmentType}. Preferred timing: ${preferredDay}. Details: ${bookingDetails || ""}`;

    return `https://wa.me/447404249203?text=${encodeURIComponent(message)}`;
  };

  const sendBooking = async () => {
    if (!bookingName || !bookingPhone || !bookingEmail || !bookingDetails) {
      setSendMessage("Please fill in your name, phone, email, and a short description of the issue.");
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
          appointment: appointmentType,
          timing: preferredDay,
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

  const Header = () => (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <button onClick={openHomePage} className="flex min-w-0 items-center gap-3 text-left md:gap-4">
            <img
              src="/logo.jpg"
              alt="H2H Leisure logo"
              className="h-16 w-16 rounded-full object-cover md:h-40 md:w-40 md:-mb-20"
            />
            <div className="min-w-0">
              <div className="text-lg font-black tracking-tight text-slate-950 md:text-2xl">{brand.name}</div>
              <div className="max-w-[150px] text-xs text-slate-500 md:max-w-none md:text-sm">{brand.tagline}</div>
            </div>
          </button>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-semibold md:flex">
            <button onClick={openHomePage} className="whitespace-nowrap hover:text-emerald-700">Home</button>
            <button onClick={openHomeServices} className="whitespace-nowrap hover:text-emerald-700">Services</button>
            <button onClick={openBookingPage} className="whitespace-nowrap hover:text-emerald-700">Booking</button>
            <button onClick={openFaqPage} className="whitespace-nowrap hover:text-emerald-700">FAQ</button>
            <button onClick={openTeamPage} className="whitespace-nowrap hover:text-emerald-700">About us</button>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${brand.phone}`}
              className="hidden md:inline-flex rounded-2xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 md:text-sm"
            >
              Call Us
            </a>
            <button
              onClick={openBookingPage}
              className="rounded-2xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:scale-[1.02] md:px-4 md:text-sm"
            >
              Book Now
            </button>
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 md:hidden"
              aria-label="Toggle menu"
            >
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
              <button onClick={openHomePage} className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">Home</button>
              <button onClick={openServicesPage} className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">Services</button>
              <button onClick={openBookingPage} className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">Booking</button>
              <button onClick={openFaqPage} className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">FAQ</button>
              <button onClick={openTeamPage} className="rounded-xl px-3 py-3 text-left hover:bg-slate-50">About us</button>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );

  const renderQuickBookingCard = (full = false) => (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Quick booking</div>
      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Request a repair or inspection</h2>

      <div className={`mt-5 grid gap-3 ${full ? "md:grid-cols-2" : ""}`}>
        <input
          value={bookingName}
          onChange={(e) => setBookingName(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white"
          placeholder="Full name"
        />
        <input
          value={bookingPhone}
          onChange={(e) => setBookingPhone(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white"
          placeholder="Phone"
        />
        <input
          value={bookingEmail}
          onChange={(e) => setBookingEmail(e.target.value)}
          className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white ${full ? "md:col-span-2" : ""}`}
          placeholder="Email"
        />

        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white"
        >
          {services.map((service) => (
            <option key={service.title}>{service.title}</option>
          ))}
        </select>

        <select
          value={appointmentType}
          onChange={(e) => setAppointmentType(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white"
        >
          <option>Mobile callout</option>
          <option>Phone consultation first</option>
        </select>

        {full ? (
          <select
            value={preferredDay}
            onChange={(e) => setPreferredDay(e.target.value)}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white md:col-span-2"
          >
            <option>As soon as possible</option>
            <option>This week</option>
            <option>Next week</option>
            <option>Just getting a quote first</option>
          </select>
        ) : null}

        <textarea
          value={bookingDetails}
          onChange={(e) => setBookingDetails(e.target.value)}
          className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-300 focus:bg-white ${full ? "min-h-[140px] md:col-span-2" : "min-h-[90px]"}`}
          placeholder={full ? "Describe the issue, any leak points, appliances involved, or anything useful to know..." : "Briefly describe the issue..."}
        />

        {sendMessage ? (
          <div
            className={`rounded-2xl px-4 py-3 text-sm font-medium ${full ? "md:col-span-2" : ""} ${sendMessage.startsWith("Booking request sent") ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}
          >
            {sendMessage}
          </div>
        ) : null}

        <button
          onClick={full ? sendBooking : openBookingPage}
          disabled={isSending}
          className={`rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 ${full ? "md:col-span-2" : ""}`}
        >
          {isSending ? "Sending..." : full ? "Submit booking request" : "Continue booking"}
        </button>
      </div>
    </div>
  );

  if (pageView === "faq") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ page</div>
              <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Frequently asked questions</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A simple place for customers to get quick answers about the mobile service, coverage area, and how bookings work.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-black tracking-tight text-slate-950">{faq.q}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Still need help?</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Call or WhatsApp instead</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                For urgent issues, fault photos, or anything that is easier to explain directly, the fastest route is still a call or WhatsApp message.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={`tel:${brand.phone}`} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">
                  Call {brand.phone}
                </a>
                <a href={buildWhatsAppUrl()} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (pageView === "services") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Services page</div>
              <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">What we do</h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A full look at the motorhome, caravan and campervan repair, maintenance, inspection and mobile callout services available through H2H Leisure across Craigavon and Northern Ireland.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      {service.icon}
                    </div>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                      {service.badge}
                    </div>
                  </div>
                  <h2 className="text-xl font-black tracking-tight text-slate-950">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
                  <div className="mt-5 flex items-center justify-end gap-3">
                    <button onClick={openBookingPage} className="text-sm font-bold text-slate-900 hover:text-emerald-700">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (pageView === "team") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">About us</div>
            <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">About H2H Leisure</h1>
            <p className="mt-4 text-lg text-slate-600">
              A small, reliable team focused on quality workmanship, clear communication, and making things as straightforward as possible for every customer across Craigavon and Northern Ireland.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm flex flex-col items-start">
              <img src="/james.jpg" alt="James" className="mb-5 h-40 w-40 rounded-full object-cover object-top ring-4 ring-slate-100" />
              <div className="text-xl font-black">James</div>
              <div className="text-sm font-semibold text-emerald-700">Engineer</div>
              <p className="mt-4 leading-7 text-slate-600">
                James handles all repair and maintenance work, from diagnosing leaks to fitting and fixing key systems. With hands-on experience and a practical approach, the focus is always on getting the job done properly and reliably.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm flex flex-col items-start">
              <img src="/amy.jpg" alt="Amy" className="mb-5 h-40 w-40 rounded-full object-cover object-top ring-4 ring-slate-100" />
              <div className="text-xl font-black">Amy</div>
              <div className="text-sm font-semibold text-emerald-700">Office & Bookings</div>
              <p className="mt-4 leading-7 text-slate-600">
                Amy manages bookings, customer communication, and day-to-day organisation. From first enquiry to scheduling, she ensures everything runs smoothly and customers are kept informed.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (pageView === "booking") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        <section id="booking" className="bg-gradient-to-br from-sky-100 via-white to-amber-50">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-12">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Booking page</div>
              <h1 className="mt-2 text-4xl font-black tracking-tight">Book your repair or inspection</h1>
              <p className="mt-3 max-w-2xl text-slate-600">
                Fill in the details below and H2H Leisure can review the job, get in touch, and arrange the next step.
              </p>

              <div className="mt-8">
                {renderQuickBookingCard(true)}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Booking summary</div>
                <div className="mt-4 space-y-4 text-sm text-slate-200">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Selected job</div>
                    <div className="mt-1 text-xl font-black text-white">{selectedService}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Appointment type</div>
                    <div className="mt-1 text-base font-semibold text-white">{appointmentType}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Timing</div>
                    <div className="mt-1 text-base font-semibold text-white">{preferredDay}</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Overview</div>
                    <div className="mt-1 text-base font-semibold text-white">{bookingSummary}</div>
                  </div>
                </div>
              </div>

              <div id="contact" className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Need a quick answer?</div>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Call or WhatsApp instead</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  For urgent leaks, faults, or sending photos, the fastest route is still a call or WhatsApp message.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`tel:${brand.phone}`} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
                    Call {brand.phone}
                  </a>
                  <a href={buildWhatsAppUrl()} className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <section className="relative overflow-hidden bg-slate-950">
        <style>{`
          @keyframes heroFloatZoom {
            0% { transform: scale(1.02) translate3d(0px, 0px, 0px); }
            50% { transform: scale(1.08) translate3d(-10px, -6px, 0px); }
            100% { transform: scale(1.02) translate3d(0px, 0px, 0px); }
          }
        `}</style>

        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="H2H Leisure motorhome"
            className="h-full w-full object-cover object-center"
            style={{ animation: "heroFloatZoom 18s ease-in-out infinite" }}
          />
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/15" />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-start px-4 pb-16 pt-14 md:px-6 md:pb-24 md:pt-24">
          <div className="grid w-full gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="max-w-2xl text-white">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-emerald-300 shadow-sm backdrop-blur-sm">
                  Primary coverage across Craigavon and surrounding areas
                </div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-slate-200 shadow-sm backdrop-blur-sm">
                  All Northern Ireland covered (travel charges apply)
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-200 shadow-sm backdrop-blur-sm">
                  🚨 Emergency callouts available
                </div>
              </div>

              <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                Professional motorhome repairs - wherever you are
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg md:mt-6 md:text-xl">
                H2H Leisure provides professional motorhome repairs in Craigavon and across Northern Ireland. We specialise in caravan, campervan and motorhome repairs, including habitation checks, water leak repairs, skylights, windows, heating systems, boilers, solar panel work and general maintenance, all with a fully mobile service that comes to you.
              </p>

              <div className="mt-4 text-sm font-semibold text-emerald-300">
                Free call out within Craigavon area (15 mile radius). We cover all of Northern Ireland, travel fee applies.
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${brand.phone}`}
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15"
                >
                  Call Us
                </a>
                <button
                  onClick={openBookingPage}
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:translate-y-[-1px]"
                >
                  Book Now
                </button>
                <a
                  href={buildWhatsAppUrl()}
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15"
                >
                  WhatsApp
                </a>
                <button
                  onClick={openServicesPage}
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15 md:hidden"
                >
                  View Services
                </button>
              </div>

              <div className="mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 md:mt-10 md:gap-4">
                {[
                  ["MCEA Registered", ""],
                  ["Insured & experienced", "Work you can trust"],
                  ["Fully mobile", "We come to you"],
                  ["Excellent customer service", "Responsive and reliable"],
                ].map(([value, label], index) => (
                  <div key={value} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 shadow-sm backdrop-blur-sm">
                    <div className="text-lg font-black text-white">{value}</div>
                    <div className="mt-1 text-sm text-slate-300">{label}</div>
                    {index === 0 && (
                      <div className="mt-4 flex w-full justify-center">
                        <div className="rounded-xl bg-white p-3 shadow-sm">
                          <img
                            src="/mcea.jpg"
                            alt="MCEA Registered"
                            className="h-12 w-auto md:h-10"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:flex md:justify-end">
              <div className="mt-6 w-full max-w-[450px] rounded-[2rem] border border-white/10 bg-white/92 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-md md:-mt-80">
                {renderQuickBookingCard()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="hidden md:block mx-auto mt-14 max-w-7xl px-4 py-10 md:mt-20 md:px-6">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Services</div>
            <h2 className="text-3xl font-black tracking-tight">What we do</h2>
          </div>
          <button onClick={openBookingPage} className="text-sm font-bold text-slate-900 hover:text-emerald-700">Book a job</button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  {service.icon}
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
                  {service.badge}
                </div>
              </div>
              <h3 className="text-xl font-black tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.desc}</p>
              <div className="mt-4 flex items-center justify-end gap-3">
                <button onClick={openBookingPage} className="text-sm font-bold text-slate-900 hover:text-emerald-700">Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Areas we cover</div>
          <h2 className="text-3xl font-black tracking-tight">Motorhome repairs in Craigavon and across Northern Ireland</h2>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            H2H Leisure provides motorhome repairs in Craigavon, as well as caravan and campervan repairs across Northern Ireland. Our mobile service covers the Craigavon area, including nearby towns such as Lurgan, Portadown, Banbridge, Armagh, Dungannon, Moira and Lisburn. We also travel throughout Northern Ireland for motorhome repairs, habitation checks, pre-purchase inspections, water leak repairs, skylight and window repairs, and heating or boiler issues, with a travel fee where applicable.
          </p>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="mb-6">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">What customers say</div>
          <h2 className="text-3xl font-black tracking-tight">Trusted by motorhome owners</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-lg font-black tracking-tight">{testimonial.name}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">“{testimonial.text}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
          <h2 className="text-2xl font-black tracking-tight text-slate-950">Why customers search for H2H Leisure</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Customers typically find us when searching for motorhome repairs in Craigavon, caravan repairs in Northern Ireland, mobile motorhome repairs, campervan repairs, habitation checks, pre-purchase inspections, water leak repairs, boiler and heating repairs, or skylight and window repairs. Our aim is to provide a professional, responsive and fully mobile service with clear communication from first enquiry to completed repair.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white pb-24 md:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-black">{brand.name}</div>
            <div className="text-sm text-slate-500">
              Motorhome, caravan and campervan repairs, habitation checks and mobile callouts across Craigavon and Northern Ireland.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <button onClick={openHomeServices}>Services</button>
            <button onClick={openBookingPage}>Booking</button>
            <button onClick={openFaqPage}>FAQ</button>
            <button onClick={openTeamPage}>About us</button>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl gap-3">
          <a
            href={`tel:${brand.phone}`}
            className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900"
          >
            Call
          </a>
          <a
            href={buildWhatsAppUrl()}
            className="flex-1 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700"
          >
            WhatsApp
          </a>
          <button
            onClick={openBookingPage}
            className="flex-1 rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
