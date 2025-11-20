import React from "react";
import { REVIEWS } from '@/data/reviews'
import ReviewCard from "@/components/Review/ReviewCard";


function Review() {
  return (
    <section className="relative w-full bg-black text-white py-16">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
          Social Proof
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-4xl font-extrabold ">
          <span className="block leading-[42px] sm:leading-[52px] md:leading-[40px]">
            DON’T JUST TAKE MY
          </span>
          <span className="block leading-[42px] sm:leading-[52px] md:leading-[60px]">
            <span className="align-[-2px]">🙂</span> WORD FOR IT.
          </span>
        </h2>

        <p className="mt-3 text-white/70 max-w-sm">
          A few words from clients who shipped real projects with me.
        </p>

        {/* Static grid for small screens */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Review
