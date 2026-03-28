import Link from "next/link";
import { Footer, Header, MobileStickyBar, BookingCardStandalone } from "./components/SiteShell";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="H2H Leisure motorhome" className="h-full w-full object-cover object-center" />
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
                  href="tel:+447404249203"
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15"
                >
                  Call Us
                </a>
                <Link
                  href="/booking"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl transition hover:translate-y-[-1px]"
                >
                  Book Now
                </Link>
                <a
                  href="https://wa.me/447404249203"
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15"
                >
                  WhatsApp
                </a>
                <Link
                  href="/services"
                  className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/15 md:hidden"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="md:flex md:flex-col md:items-end">
              <div className="mb-4 flex items-center justify-center gap-2 self-end text-sm font-semibold text-white">
                <span>Find us on Facebook</span>
                <a
                  href="https://www.facebook.com/p/H2H-Leisure-61579803252525/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-300 hover:text-blue-400"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07C2 17.11 5.66 21.29 10.44 22v-7.06H7.9v-2.87h2.54V9.41c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.87h-2.34V22C18.34 21.29 22 17.11 22 12.07z" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 w-full max-w-[450px] rounded-[2rem] border border-white/10 bg-white/92 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.28)] backdrop-blur-md md:-mt-80">
                <BookingCardStandalone />
              </div>
            </div>
          </div>
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

      <Footer />
      <MobileStickyBar />
    </div>
  );
}