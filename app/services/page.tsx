import { Footer, Header, MobileStickyBar } from "../components/SiteShell";
import { services } from "../lib/site-data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Services page</div>
            <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">What we do</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">A full look at the motorhome, caravan and campervan repair, maintenance, inspection and mobile callout services available through H2H Leisure across Craigavon and Northern Ireland.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">{service.icon}</div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">{service.badge}</div>
                </div>
                <h2 className="text-xl font-black tracking-tight text-slate-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}