import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-4">
      <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
        <p>
          I'm the founder of <a href="/emailoptimize">EmailOptimize</a> and <Link href="/trustalytics">Trustalytics.ai</Link> (currently in R&D), where my focus has
          been on understanding how consumer trust, relevance, and behavior compound or decay over
          time inside email systems.
        </p>
        <p>
          Before that, I led email marketing at <a href="https://e2.agency" target="_blank" rel="noopener noreferrer">E2.Agency</a>, worked across hundreds of ecommerce
          brands, and spent years experimenting at the intersection of engineering, consumer behavior,
          and retention.
        </p>
      </div>

      <section className="mt-4 pt-3 border-t border-gray-300 border-dashed">
        <h2 className="text-base font-semibold mb-2.5 text-black">What I do</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Over the last decade, I've worked across hundreds of ecommerce brands, including
            companies doing well over $100M per year, where email and SMS contribute 30–60% of total revenue.
            In almost every case, I wasn't brought in to "improve email marketing".
            I was brought in to stabilize a system that had started behaving unpredictably at scale.
          </p>
          <p className="font-semibold">
            Most email programs don't fail. They decay.
          </p>
          <p>
            I originally studied engineering in China, later pursued a Master's in Engineering Management
            in Australia, and became early-interested in quantifying consumer trust long before the tooling
            existed to support it.
          </p>
        </div>
      </section>

      <section className="mt-4 pt-3 border-t border-gray-300 border-dashed">
        <h2 className="text-base font-semibold mb-2.5 text-black">My approach</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p className="font-semibold">
            Email is not a landing page. It's a behavioral system with memory.
          </p>
          <p>
            The lens I use for this work is simple, but unforgiving -
          </p>
          <div className="bg-gray-50 border border-gray-200 px-4 py-3 my-3">
            <div className="flex items-center justify-between text-sm font-medium text-black italic">
              <span>Delivered</span>
              <span className="text-gray-400">→</span>
              <span>Opened</span>
              <span className="text-gray-400">→</span>
              <span>Read</span>
              <span className="text-gray-400">→</span>
              <span>Taken Action</span>
            </div>
          </div>
          <p>
            If these layers aren't respected in order, scale doesn't create leverage.
            <strong> It creates risk.</strong> Most strategies jump straight to action clicks, conversions, revenue while assuming everything
            upstream is stable. It isn't.
          </p>
          <p>
            Most of this work happens quietly. There's no big relaunch. No flashy redesign. Just a re-anchoring of how the system behaves, so it compounds instead of decaying.
          </p>
        </div>
      </section>

      <section className="mt-4 pt-3 border-t border-gray-300 border-dashed">
        <h2 className="text-base font-semibold mb-2.5 text-black">Writings</h2>
        <div className="space-y-3 text-gray-700 leading-relaxed text-sm">
          {/* Blog posts will be integrated here via CMS */}
        </div>
      </section>

      <section className="mt-4 pt-3 pb-16 border-t border-gray-300 border-dashed">
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            I work with ecommerce brands where email and SMS already drive significant revenue, but performance has become unpredictable. Results are flattening, deliverability issues come and go, or revenue that used to compound now needs to be chased.
          </p>
          <p className="text-base border-l-4 border-gray-300 pl-4">
            If your email program is starting to lose its edge, reach me on <a href="https://wa.me/">WhatsApp</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
