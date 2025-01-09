"use client"
import { notFound } from "next/navigation";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}
export default function ReviewDetails({ params }) {
  const { productId, reviewId } = params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading ReviewId");
  }
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}
