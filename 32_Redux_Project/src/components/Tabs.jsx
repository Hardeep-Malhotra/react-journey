import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../features/SearchSlice";
import { Image, Video, Film } from "lucide-react";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const tabs = [
    { id: "photos", label: "Photos", icon: Image },
    { id: "videos", label: "Videos", icon: Video },
    { id: "gifs", label: "GIFs", icon: Film },
  ];

  return (
    <div className="w-full flex justify-center pb-10 pt-4 px-4 box-border">
      <div className="flex w-full max-w-md bg-gray-900/40 backdrop-blur-md p-1 rounded-xl sm:rounded-2xl border border-gray-800 shadow-2xl gap-1 sm:gap-2 box-border">
        {tabs.map((tab, idx) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={idx}
              type="button"
              onClick={() => dispatch(setActiveTab(tab.id))}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[9px] sm:text-[11px] font-black tracking-wider sm:tracking-widest uppercase transition-all duration-300 cursor-pointer select-none active:scale-95 whitespace-nowrap ${
                isActive
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-100 sm:scale-105"
                  : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/50"
              }`}
            >
              <IconComponent
                size={12}
                sm:size={14}
                strokeWidth={3}
                className="shrink-0"
              />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
