import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-2">
        <div>Blogs Page</div>
        <Link href="/blog/first" className="p-4 bg-green-200 rounded">Read our First Blog</Link>
        <Link href="/blog/second" className="p-4 bg-green-200 rounded">Read our Second Blog</Link>
        <Link href="/" className="p-4 bg-green-200 rounded">Back to Home</Link>
    </div>
  );
}
