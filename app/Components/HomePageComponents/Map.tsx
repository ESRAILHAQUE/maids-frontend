export default function Map() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-14 md:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,194,203,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(207,75,0,0.12),transparent_30%)]" />

      <div className="relative w-[95%]  mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-3 md:gap-4 items-stretch">
          <div className="relative overflow-hidden rounded-sm border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.198509581123!2d51.5314!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA3LjQiTiA1McKwMzEnNTMuMCJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] sm:h-[400px] lg:h-full"
              title="Aethla location map"
            ></iframe>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="space-y-3 mb-4">
              <span className="inline-flex items-center justify-center rounded-full bg-[#48C2CB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#CF4B00] ring-1 ring-[#48C2CB]/20">
                Visit or call
              </span>
              <h3 className="text-xl font-semibold text-slate-900">
                Serving Doha and greater Qatar.
              </h3>
              <p className="text-sm text-slate-600">
                Book maid visits, office cleaning, or site walk-throughs. We
                respond fast during business hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="rounded-sm bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900">Head office</p>
                <p>Doha, Qatar</p>
                <p>Sun – Thu, 8:00 – 19:00</p>
              </div>
              <div className="rounded-sm bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900">Contact</p>
                <p>+974 0000 0000</p>
                <p>hello@aethla.com</p>
              </div>
              <div className="rounded-sm  bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900">Service hours</p>
                <p>6:00 – 23:00 daily</p>
                <p>Same-week slots available</p>
              </div>
              <div className="rounded-sm bg-slate-50 p-4 border border-slate-200">
                <p className="font-semibold text-slate-900">Support</p>
                <p>WhatsApp & phone updates</p>
                <p>Visit summaries on request</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer bg-[#CF4B00] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(207,75,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b84200]">
                Book a visit
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-slate-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800">
                Call our team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
