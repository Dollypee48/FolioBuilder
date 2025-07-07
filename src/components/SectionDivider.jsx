export default function SectionDivider({ title }) {
  return (
    <div className="my-6 border-t border-zinc-300 dark:border-zinc-700 pt-4">
      <h3 className="text-xl font-semibold text-emerald-600">{title}</h3>
    </div>
  );
}