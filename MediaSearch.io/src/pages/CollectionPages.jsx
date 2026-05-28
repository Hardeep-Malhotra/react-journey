import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../features/collectionSlice";
import { toast } from "react-toastify";
import { Trash2, FolderOpen } from "lucide-react";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    if (window.confirm("Bhai, kya sach mein poori collection udaani hai?")) {
      dispatch(clearCollection());

      toast.error("💥 Collection cleared completely!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#030405] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden box-border">
      <div className="max-w-7xl mx-auto w-full">
        {collection.length > 0 ? (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-gray-900 pb-6 w-full box-border">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">
                Your Vault
              </h2>
              <p className="text-[10px] text-emerald-500 font-bold tracking-widest uppercase mt-1">
                Saved Items: {collection.length}
              </p>
            </div>

            <button
              onClick={clearAll}
              className="w-full sm:w-auto flex items-center justify-center gap-2 active:scale-95 transition-all duration-200 cursor-pointer bg-red-950/40 text-red-400 hover:bg-red-600 hover:text-white border border-red-900/50 px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-red-900/10 shrink-0"
            >
              <Trash2 size={14} />
              Clear Vault
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 sm:py-32 text-center px-4 w-full box-border animate-in fade-in duration-500">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900/40 rounded-2xl flex items-center justify-center mb-6 border border-gray-800">
              <FolderOpen size={32} className="text-gray-600 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-500 tracking-wide uppercase">
              Collection is Empty
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xs mt-3 leading-relaxed font-medium">
              Explore the search tab to discover and save premium assets to your
              personal vault.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {collection.map((item, idx) => {
            return (
              <div key={item.id || idx} className="w-full min-w-0 h-full">
                <CollectionCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
