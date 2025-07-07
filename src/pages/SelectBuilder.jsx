import { Link } from "react-router-dom";

export default function SelectBuilder() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-10">
          What would you like to create?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              to: "/form/portfolio",
              title: "Portfolio",
              description: "Highlight your skills and projects online.",
            },
            {
              to: "/form/resume",
              title: "Resume",
              description: "Get hired with a modern, clean resume.",
            },
            {
              to: "/form/cv",
              title: "CV",
              description: "Academic or research-focused document.",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg border border-zinc-200 dark:border-zinc-700 transition"
            >
              <h3 className="text-xl font-semibold text-emerald-600">{item.title}</h3>
              <p className="text-sm text-zinc-500 mt-2">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
