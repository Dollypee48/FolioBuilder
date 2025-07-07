// src/components/FormInput.jsx
import React from "react";

export default function FormInput({ label, name, value, onChange, type = "text", placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1 text-zinc-700 dark:text-zinc-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}
