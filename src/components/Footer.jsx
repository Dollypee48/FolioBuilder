export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-green-900 text-center py-4 text-sm text-zinc-600 dark:text-zinc-300">
      © {new Date().getFullYear()} FolioBuilder. All rights reserved.
    </footer>
  );
}
