import React from "react";
import { ReviewWrapper } from "@/widgets";

const Reviews = () => {
  return (
    <main className="p-4 pt-10 md:p-10">
      <h2 className="text-center text-3xl font-lora font-medium mb-10">
        Reviews
      </h2>

      <ReviewWrapper />
    </main>
  );
};

export default Reviews;
