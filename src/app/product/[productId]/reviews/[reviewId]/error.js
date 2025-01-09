"use client";

export default function ErrorBoundary({ error, reset }) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset} className="bg-red-100 p-2 rounded">
        Try Again
      </button>
    </div>
  );
}
