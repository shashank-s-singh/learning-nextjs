export default function SpecificProductPage({ params }) {
  console.log("params", params);

  return <div>Specific Product Page {params.productId}</div>;
}
