import { useDispatch } from "react-redux";
import { addCollection } from "../features/collectionSlice";
import { BookmarkPlus } from "lucide-react";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) return null;

  const addToCollection = (mediaItem) => {
    if (!mediaItem) return;
    dispatch(addCollection(mediaItem));
  };

  return (
    <div className="w-full relative h-72 sm:h-85 bg-gray-900/20 rounded-2xl overflow-hidden border border-gray-800/50 group transition-all duration-500 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5 box-border">
      {/* 🚀 Media Container */}
      <a
        target="_blank"
        rel="noreferrer"
        className="h-full w-full block overflow-hidden"
        href={item?.url || "#"}
      >
        {item?.type === "photo" && (
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={item?.src}
            alt={item?.title}
            loading="lazy"
          />
        )}
        {item?.type === "video" && (
          <video
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            autoPlay
            loop
            muted
            playsInline
            src={item?.src}
          ></video>
        )}
        {item?.type === "gif" && (
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={item?.src}
            alt={item?.title}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>

      <div className="flex justify-between gap-2 sm:gap-3 items-center w-full px-3 sm:px-4 py-4 sm:py-5 absolute bottom-0 backdrop-blur-md border-t border-white/5 box-border">
        <div className="flex flex-col flex-1 min-w-0">
          {" "}
          <span className="text-[9px] sm:text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-0.5 sm:mb-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item?.type}
          </span>
          <h2 className="text-xs sm:text-sm font-bold text-gray-100 truncate">
            {item?.title || "Premium Media"}
          </h2>
        </div>

        <button
          onClick={() => addToCollection(item)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-emerald-500 hover:bg-emerald-400 active:scale-90 text-black font-black text-[9px] sm:text-[10px] uppercase tracking-tighter rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-300 shrink-0"
        >
          <BookmarkPlus size={12} className="sm:w-[14px] sm:h-[14px]" />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
