import { useDispatch } from "react-redux";
import { removeCollection } from "../features/collectionSlice";
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  if (!item) return null;

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));

    toast.error("🗑️ Removed from your Vault!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="w-full relative h-72 sm:h-85 bg-[#121318] rounded-2xl overflow-hidden group border border-gray-900 hover:border-emerald-500/30 transition-all duration-500 shadow-xl box-border">
      <a
        target="_blank"
        rel="noreferrer"
        className="h-full w-full block bg-black overflow-hidden"
        href={item?.url || "#"}
      >
        {item?.type === "photo" && (
          <img
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            src={item?.src}
            alt={item?.title}
            loading="lazy"
          />
        )}
        {item?.type === "video" && (
          <video
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
            src={item?.src}
          ></video>
        )}
        {item?.type === "gif" && (
          <img
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
            src={item?.src}
            alt={item?.title}
          />
        )}
      </a>

      <div className="flex justify-between gap-2 sm:gap-3 items-center w-full px-3 sm:px-4 py-4 sm:py-5 absolute bottom-0 bg-gradient-to-t from-black via-black/95 to-transparent transition-all duration-300 box-border">
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-[9px] sm:text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-0.5">
            {item?.type}
          </span>
          <h2 className="text-xs sm:text-sm font-bold text-gray-200 truncate group-hover:text-emerald-400 transition-colors">
            {item?.title || "Premium Media"}
          </h2>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            removeFromCollection(item);
          }}
          className="flex items-center gap-1 bg-red-950/40 hover:bg-red-600 text-red-400 hover:text-white border border-red-900/50 active:scale-90 rounded-xl px-3 py-2 cursor-pointer font-black text-[10px] uppercase tracking-tighter transition-all duration-300 shrink-0 shadow-lg"
        >
          <Trash2 size={12} />
          <span>Remove</span>
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
