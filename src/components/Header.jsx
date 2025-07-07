import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white dark:bg-green-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white dark:text-white">FolioBuilder</Link>
        <nav className="space-x-6">
          <Link to="/select" className="text-zinc-700 dark:text-zinc-200 hover:underline">Create</Link>
          <Link to="/about" className="text-zinc-700 dark:text-zinc-200 hover:underline">About</Link>
        </nav>
      </div>
    </header>
  );
}
