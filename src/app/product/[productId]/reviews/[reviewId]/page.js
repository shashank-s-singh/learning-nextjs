import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
  const { productId, reviewId } = params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      Review {reviewId} for product {productId}
    </div>
  );
}
