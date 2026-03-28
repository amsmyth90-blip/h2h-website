import { Footer, Header, MobileStickyBar } from "../components/SiteShell";
import { brand, faqs } from "../lib/site-data";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <section className="bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">FAQ page</div>
            <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Frequently asked questions</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">A simple place for customers to get quick answers about the mobile service, coverage area, and how bookings work.</p>
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
            <p className="mt-3 max-w-2xl text-slate-200">For urgent issues, fault photos, or anything that is easier to explain directly, the fastest route is still a call or WhatsApp message.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`tel:${brand.phone}`} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">Call {brand.phone}</a>
              <a href={`https://wa.me/447404249203`} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}