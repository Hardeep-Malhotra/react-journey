import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const collectionCount = useSelector((state) => state.collection.items.length);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-900 px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group select-none">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-500 flex items-center justify-center font-black text-black shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform duration-300">
            M
          </div>
          <span className="hidden sm:block text-xl font-black tracking-wider text-white group-hover:text-emerald-400 transition-colors">
            MEDIA<span className="text-emerald-500">Search.io</span>
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            to="/"
            className={`text-xs sm:text-sm font-bold tracking-wide transition-all relative py-1
              ${
                location.pathname === "/"
                  ? "text-emerald-500"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            Dashboard
            {location.pathname === "/" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 rounded-full animate-pulse" />
            )}
          </Link>

          <Link
            to="/collection"
            className={`text-xs sm:text-sm font-bold tracking-wide transition-all relative py-1 flex items-center gap-1.5 sm:gap-2
              ${
                location.pathname === "/collection"
                  ? "text-emerald-500"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            <span className="whitespace-nowrap">My Vault</span>

            <span
              className={`px-1.5 py-0.5 text-[10px] sm:text-[11px] font-black rounded-md transition-all duration-300
                ${
                  collectionCount > 0
                    ? "bg-emerald-500 text-black scale-100 animate-bounce"
                    : "bg-gray-800 text-gray-500 scale-90"
                }`}
            >
              {collectionCount}
            </span>

            {location.pathname === "/collection" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 rounded-full" />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
