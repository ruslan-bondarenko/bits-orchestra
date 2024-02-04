"use client";
import React, { FC } from "react";

import {
  useAppDispatch,
  useAppSelector,
  addVisibleReviews,
  useReviewsActions,
} from "@/base/store";
import { ReviewCard } from "@/widgets";
import { Button, ButtonVariantEnum } from "@/shared/ui";
import clsx from "clsx";

const ReviewList = () => {
  const { reviewsData, visibleReviews } = useAppSelector(
    (state) => state.reviews
  );

  const { addVisibleReviews } = useReviewsActions();
  const filteredReviews = reviewsData.slice(0, visibleReviews);

  return (
    <div className="mb-20">
      {filteredReviews.length > 0 ? (
        <ul className="flex flex-col gap-6 mb-8">
          {filteredReviews.map((review) => (
            <li key={review.id} className="">
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-l">
          No reviews found. Be the first to share your thoughts by filling out
          the form below.
        </p>
      )}

      {reviewsData.length > visibleReviews && (
        <Button
          variant={ButtonVariantEnum.INVISIBLE}
          className={clsx(
            "text-m font-medium uppercase inline-block cursor-pointer"
          )}
          onClick={() => addVisibleReviews()}
        >
          Read all reviews
        </Button>
      )}
    </div>
  );
};

export default ReviewList;
