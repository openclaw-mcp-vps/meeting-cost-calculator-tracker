export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Team Leads &amp; Managers
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Calculate the{" "}
          <span className="text-[#58a6ff]">real cost</span>{" "}
          of your meetings
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect Google Calendar or Outlook, configure team salaries, and instantly see how much every meeting costs. Track spend, spot waste, and run leaner standups.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📅", title: "Calendar Sync", desc: "Connects to Google Calendar and Outlook to pull meeting data automatically." },
            { icon: "💰", title: "Cost Calculation", desc: "Set per-person salaries or hourly rates. See exact dollar cost per meeting." },
            { icon: "📊", title: "Analytics Dashboard", desc: "Weekly and monthly reports showing your team's total meeting spend." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Pro Plan</span>
          <div className="text-5xl font-extrabold text-white mb-1">$8<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-8">Everything you need to track meeting costs</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Google Calendar &amp; Outlook integration",
              "Unlimited team members",
              "Real-time cost calculation",
              "Weekly &amp; monthly reports",
              "Cost awareness alerts",
              "CSV export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started — $8/mo
          </a>
          <p className="text-[#8b949e] text-xs mt-4">7-day free trial. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does the calendar integration work?",
              a: "You authorize MeetingCost via OAuth to read your Google Calendar or Outlook events. We never store your calendar credentials — only meeting metadata like duration and attendee count."
            },
            {
              q: "How are meeting costs calculated?",
              a: "You enter each team member's annual salary or hourly rate. We calculate cost as (hourly rate × meeting duration × attendees) for every event on your calendar."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} MeetingCost. All rights reserved.
      </footer>
    </main>
  );
}
