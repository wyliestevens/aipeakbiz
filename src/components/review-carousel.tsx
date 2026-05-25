"use client";

import { Star } from "lucide-react";
import { reviews, Review } from "@/data/reviews";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[400px] bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6 mx-3">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-warning text-warning" />
        ))}
      </div>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm"
          style={{ backgroundColor: review.color }}
        >
          {review.initial}
        </div>
        <div>
          <p className="text-sm font-medium text-text-primary">{review.name}</p>
          <p className="text-xs text-text-muted">{review.title} &middot; Google Review</p>
        </div>
      </div>
    </div>
  );
}

export function ReviewCarousel({ subset }: { subset?: number[] }) {
  const displayReviews = subset
    ? subset.map((i) => reviews[i]).filter(Boolean)
    : reviews;

  // Double for infinite scroll effect
  const doubled = [...displayReviews, ...displayReviews];

  return (
    <div className="relative overflow-hidden group" role="region" aria-label="Client reviews">
      <div
        className="flex animate-scroll-x hover:[animation-play-state:paused]"
        style={{ width: `${doubled.length * 420}px` }}
      >
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function ReviewGrid({ subset }: { subset?: number[] }) {
  const displayReviews = subset
    ? subset.map((i) => reviews[i]).filter(Boolean)
    : reviews;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayReviews.map((review) => (
        <div key={review.name} className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm rounded-xl p-6">
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            &ldquo;{review.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm"
              style={{ backgroundColor: review.color }}
            >
              {review.initial}
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">{review.name}</p>
              <p className="text-xs text-text-muted">Google Review</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
