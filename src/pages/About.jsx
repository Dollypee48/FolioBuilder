export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-zinc-50 dark:bg-zinc-900 min-h-screen rounded-xl shadow-sm">
      <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-white mb-6">
        About FolioBuilder
      </h1>

      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
        <strong>FolioBuilder</strong> is a lightweight, intuitive platform that empowers anyone — especially junior developers and early-career professionals — to quickly generate:
      </p>

      <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 mb-6 space-y-2 pl-4">
        <li>
          <span className="font-semibold text-emerald-600">Resume</span> – tailored for job applications
        </li>
        <li>
          <span className="font-semibold text-emerald-600">CV (Curriculum Vitae)</span> – ideal for academic or research roles
        </li>
        <li>
          <span className="font-semibold text-emerald-600">Portfolio Website</span> – to visually showcase your skills, projects, and links
        </li>
      </ul>

      <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
        FolioBuilder simplifies document creation using smart forms and professionally styled templates. Each output can be previewed in real-time and exported as a polished PDF — no login, no backend, no friction.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
        Whether you're applying for your first job, submitting a scholarship application, or building a portfolio to share with clients or employers, FolioBuilder helps you make a great first impression.
      </p>

      <div className="mt-10 border-t pt-6 border-zinc-200 dark:border-zinc-700">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          💡 Built with React, Tailwind CSS, and a passion for helping junior developers present themselves confidently.
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">
          No account needed. No distractions. Just your content — beautifully presented.
        </p>
      </div>
    </div>
  );
}
