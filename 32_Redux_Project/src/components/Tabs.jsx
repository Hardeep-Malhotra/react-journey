import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/SearchSlice";
import { Image, Video, Film } from "lucide-react"; // Icons yahan import kar liye

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  // Tabs array ko objects mein convert kiya taaki labels aur icons dono map ho sakein
  const tabs = [
    { id: "photos", label: "Photos", icon: Image },
    { id: "videos", label: "Videos", icon: Video },
    { id: "gifs", label: "GIFs", icon: Film },
  ];

  return (
    <div className="w-full flex justify-center pb-12 pt-2">
      {/* Container - Premium Capsule Look */}
      <div className="flex bg-gray-100 p-1.5 rounded-full shadow-inner border border-gray-200/60 max-w-md w-full sm:w-auto gap-1">
        {tabs.map((tab, idx) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => dispatch(setActiveTab(tab.id))}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer select-none active:scale-95 ${
                isActive
                  ? "bg-white text-indigo-600 shadow-md shadow-gray-200/80 transform scale-102"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/50"
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

export default Tabs;
