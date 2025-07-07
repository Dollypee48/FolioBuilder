import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-4">
      <h1 className="text-6xl font-extrabold text-zinc-800 dark:text-white mb-2">404</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-md transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
