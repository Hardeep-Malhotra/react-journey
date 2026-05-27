import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  // 🚀 SAFETY CHECK: Agar item mila hi nahi (undefined hai), toh yahi se ruk jao, crash mat karo!
  if (!item) {
    return null;
  }

  const addToCollection = (mediaItem) => {
    // Safe check taaki dispatch karte waqt bhi na fate
    if (!mediaItem) return;
    dispatch(addCollection(mediaItem));
    dispatch(addedToast());
  };

  return (
    <div className="w-full relative h-80 bg-white rounded-xl overflow-hidden shadow-md group">
      {/* Media Rendering - Optional Chaining (?.) ke saath */}
      <a
        target="_blank"
        rel="noreferrer"
        className="h-full block"
        href={item?.url || "#"}
      >
        {item?.type === "photo" && (
          <img className="h-full w-full object-cover" src={item?.src} alt="" />
        )}
        {item?.type === "video" && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            src={item?.src}
          ></video>
        )}
        {item?.type === "gif" && (
          <img className="h-full w-full object-cover" src={item?.src} alt="" />
        )}
      </a>

      {/* Info and Save Button */}
      <div className="flex justify-between gap-3 items-center w-full px-4 py-4 absolute bottom-0 bg-black/50 text-white">
        {/* 🚀 Line 41 Fix: item?.title use kiya safety ke liye */}
        <h2 className="text-sm font-semibold truncate flex-1">
          {item?.title || "Premium Media"}
        </h2>

        <button
          onClick={() => addToCollection(item)}
          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-xs font-bold rounded-lg transition-all"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
