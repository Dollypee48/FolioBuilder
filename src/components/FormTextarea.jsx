export default function FormTextarea({ label, name, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-zinc-800 dark:text-zinc-300 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-zinc-800 dark:text-white"
        rows={4}
      />
    </div>
  );
}
