import { Footer, Header, MobileStickyBar } from "../components/SiteShell";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">About us</div>
          <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">About H2H Leisure</h1>
          <p className="mt-4 text-lg text-slate-600">A small, reliable team focused on quality workmanship, clear communication, and making things as straightforward as possible for every customer.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm text-center flex flex-col items-center">
            <img src="/james.jpg" alt="James" className="mb-5 h-40 w-40 rounded-full object-cover object-center ring-4 ring-slate-100 mx-auto" />
            <div className="text-xl font-black text-center w-full">James</div>
            <div className="text-sm font-semibold text-emerald-700 text-center w-full">Engineer</div>
            <p className="mt-4 leading-7 text-slate-600 text-center">James handles all repair and maintenance work, from diagnosing leaks to fitting and fixing key systems. With hands-on experience and a practical approach, the focus is always on getting the job done properly and reliably.</p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm text-center flex flex-col items-center">
            <img src="/amy.jpg" alt="Amy" className="mb-5 h-40 w-40 rounded-full object-cover object-center ring-4 ring-slate-100 mx-auto" />
            <div className="text-xl font-black text-center w-full">Amy</div>
            <div className="text-sm font-semibold text-emerald-700 text-center w-full">Office & Bookings</div>
            <p className="mt-4 leading-7 text-slate-600 text-center">Amy manages bookings, customer communication, and day-to-day organisation. From first enquiry to scheduling, she ensures everything runs smoothly and customers are kept informed.</p>
          </div>
        </div>
      </section>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}