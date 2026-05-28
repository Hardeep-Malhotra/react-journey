import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/SearchSlice";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state) => state.search);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(setQuery(text.trim()));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-10 sm:pt-16 flex flex-col items-center gap-6 sm:gap-8 box-border">
      <div className="text-center w-full px-2">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white break-words">
          MEDIA
          <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-4 sm:underline-offset-8">
            Search.io
          </span>
        </h1>
        <p className="mt-3 text-gray-500 text-xs sm:text-base font-medium max-w-md mx-auto leading-relaxed">
          Access the world's finest collection of photos, videos, and GIFs in
          one place.
        </p>
      </div>

      <form
        onSubmit={submitHandler}
        className="w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-gray-900/40 backdrop-blur-md p-2 rounded-2xl border border-gray-800 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/50 shadow-2xl shadow-black box-border"
      >
        <div className="flex items-center w-full pl-3 sm:pl-4 gap-2 sm:gap-3">
          <Search
            className="text-emerald-500 shrink-0"
            size={18}
            sm:size={22}
          />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full bg-transparent py-2.5 sm:py-4 text-sm sm:text-lg text-gray-200 placeholder-gray-600 outline-none"
            type="text"
            placeholder={`Search premium ${activeTab || "media"}...`}
          />
        </div>

        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-black px-6 sm:px-10 py-3 sm:py-4 rounded-xl text-xs sm:text-base shadow-lg shadow-emerald-500/10 cursor-pointer transition-all shrink-0">
          Search
        </button>
      </form>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest px-2">
        <span>Trending:</span>
        <span className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors">
          Cyberpunk
        </span>
        <span className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors">
          Nature
        </span>
        <span className="text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors">
          Minimal
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
