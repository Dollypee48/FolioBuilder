
export default function DownloadButton({ onClick, label = "Download" }) {
  return (
    <button
      onClick={onClick}
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-md transition"
    >
      {label}
    </button>
  );
}
