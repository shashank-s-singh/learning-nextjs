import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-green-400 text-xl">Home Page</p>
      <div className="p-4 bg-green-200 rounded text-center w-32 mb-2">
        <Link href="/blog">Blog</Link>
      </div>
      <div className="p-4 bg-green-200 rounded text-center w-32">
        <Link href="/order-product">Order Page</Link>
      </div>
    </div>
  );
}
