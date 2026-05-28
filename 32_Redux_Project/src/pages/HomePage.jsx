import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#030405] text-white">
      <SearchBar />
      <Tabs />

      <ResultGrid />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 border-t border-gray-900/50 mt-10">
        <div className="text-center mb-12">
          <h3 className="text-xs sm:text-sm font-black tracking-widest text-emerald-500 uppercase">
            Why MEDIA<span className="text-white">Search.io</span>?
          </h3>
          <p className="text-xl sm:text-2xl font-extrabold text-gray-300 mt-2">
            The Ultimate Media Engine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#0a0a0a]/60 border border-gray-900 p-6 rounded-2xl flex flex-col gap-3">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-xl border border-emerald-500/20">
              <Zap size={20} />
            </div>
            <h4 className="text-base font-bold text-gray-200">
              Lightning Fast
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Instant access to millions of high-quality premium photos, videos,
              and GIFs with real-time API syncing.
            </p>
          </div>

          <div className="bg-[#0a0a0a]/60 border border-gray-900 p-6 rounded-2xl flex flex-col gap-3">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-xl border border-emerald-500/20">
              <Sparkles size={20} />
            </div>
            <h4 className="text-base font-bold text-gray-200">
              Personal Vault
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Save your favorite digital assets locally inside your secure vault
              using Redux-powered live state management.
            </p>
          </div>

          <div className="bg-[#0a0a0a]/60 border border-gray-900 p-6 rounded-2xl flex flex-col gap-3">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 flex items-center justify-center rounded-xl border border-emerald-500/20">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-base font-bold text-gray-200">
              Unified Dashboard
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              No need to shuffle between tabs. Enjoy a single seamless dashboard
              optimized for all devices and touch targets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
