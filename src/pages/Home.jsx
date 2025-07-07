import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-white mb-4">
          Welcome to FolioBuilder
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
          Quickly create a professional Portfolio, Resume, or CV. Just fill out a smart form, preview the result, and download it as a PDF.
        </p>
        <Link
          to="/select"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-base font-medium px-6 py-3 rounded-lg transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
