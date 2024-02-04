"use client";
import React from "react";
import { ReviewList, ReviewForm } from "@/widgets";

const ReviewWrapper = () => {
  return (
    <div>
      <ReviewList />
      <ReviewForm />
    </div>
  );
};

export default ReviewWrapper;
