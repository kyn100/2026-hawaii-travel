export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌺</span>
            <span className="font-semibold text-white">Hawaii Explorer</span>
          </div>

          <p className="text-sm text-gray-400">
            Explore the beauty of Oahu, Big Island, and Maui
          </p>

          <p className="text-xs text-gray-500">
            February 2026 Trip Planner
          </p>
        </div>
      </div>
    </footer>
  );
}
