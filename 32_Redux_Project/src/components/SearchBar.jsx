import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setActiveTab } from "../features/SearchSlice";
// Tip: Install lucide-react if you haven't (npm i lucide-react)
import { Search, Image, Video, Film } from "lucide-react";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Redux se activeTab nikal rahe hain taaki UI active state dikha sake
  const { activeTab } = useSelector((state) => state.search);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(setQuery(text.trim()));
      // Professional search engines par query search ke baad input se ghaib nahi hoti,
      // isliye setText("") hata diya hai taaki user ko search term dikhti rahe.
    }
  };

  const tabs = [
    { id: "photos", label: "Photos", icon: Image },
    { id: "videos", label: "Videos", icon: Video },
    { id: "gifs", label: "GIFs", icon: Film },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center gap-8">
      {/* Project Branding */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl">
          mediaSearch<span className="text-indigo-600">.io</span>
        </h1>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">
          Discover high-quality photos, videos, and GIFs instantly.
        </p>
      </div>

      {/* Main Search Form */}
      <form
        onSubmit={submitHandler}
        className="w-full flex items-center gap-3 bg-white p-2 rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500"
      >
        <div className="flex items-center flex-1 pl-4 gap-3">
          <Search className="text-gray-400 shrink-0" size={22} />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full bg-transparent py-3 text-lg text-gray-800 placeholder-gray-400 outline-none"
            type="text"
            placeholder={`Search premium ${activeTab}...`}
          />
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-medium px-8 py-3.5 rounded-xl text-base shadow-md shadow-indigo-600/10 cursor-pointer transition-all">
          Search
        </button>
      </form>

      {/* Media Type Tabs */}
      <div className="flex bg-gray-100 p-1.5 rounded-xl border border-gray-200/50">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => dispatch(setActiveTab(tab.id))}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all ${
                isActive
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <IconComponent size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
