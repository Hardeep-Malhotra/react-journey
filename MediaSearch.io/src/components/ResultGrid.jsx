import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIPHY } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../features/SearchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const goData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];

        if (activeTab === "photos") {
          let responseObj = await fetchPhotos(query, page);
          const actualArray = responseObj?.results || responseObj;
          if (Array.isArray(actualArray)) {
            data = actualArray.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description || "Beautiful Image",
              thumbnail: item.urls?.small || item.urls?.regular || "",
              src: item.urls?.full || item.urls?.regular || "",
              url: item.links?.html || "#",
            }));
          }
        } else if (activeTab === "videos") {
          let responseObj = await fetchVideos(query, page);
          const actualArray = responseObj?.videos || responseObj;
          if (Array.isArray(actualArray)) {
            data = actualArray.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user?.name
                ? `Video by ${item.user.name}`
                : `Premium Video`,
              thumbnail: item.image,
              src: item.video_files?.[0]?.link || "",
              url: item.url,
            }));
          }
        } else if (["gif", "gifs", "GIFS"].includes(activeTab)) {
          let responseObj = await fetchGIPHY(query, page);
          const actualArray = responseObj?.data || responseObj;
          if (Array.isArray(actualArray)) {
            data = actualArray.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title || "Trending GIF",
              thumbnail: item.images?.fixed_width?.url || "",
              src: item.images?.original?.url || "",
              url: item.url,
            }));
          }
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    goData();
  }, [query, activeTab, dispatch, page]);

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-sm mt-6 font-black tracking-widest text-emerald-500 uppercase animate-pulse">
          Fetching {activeTab}...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-20 px-4">
        <h1 className="text-xl font-black text-white uppercase tracking-tight">
          Error
        </h1>
        <p className="text-gray-500 mt-2 text-xs font-medium">{error}</p>
      </div>
    );
  }

  if (!loading && query && results?.length === 0) {
    return (
      <div className="w-full text-center py-20 px-4">
        <h1 className="text-lg font-black text-gray-700 uppercase">
          No {activeTab} found for{" "}
          <span className="text-gray-400">"{query}"</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 overflow-hidden box-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {results?.map((item, idx) => (
          <div key={item.id || idx} className="w-full min-w-0">
            <ResultCard item={item} />
          </div>
        ))}
      </div>

      {results?.length > 0 && (
        <div className="flex flex-row justify-center gap-3 sm:gap-6 items-center mt-12 py-8 border-t border-gray-900/50 w-full">
          <button
            disabled={page === 1}
            onClick={() => {
              setPage((prev) => prev - 1);
              window.scrollTo(0, 0);
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-black text-[10px] sm:text-xs uppercase transition-all border shrink-0 ${
              page === 1
                ? "bg-gray-900/20 text-gray-800 border-transparent"
                : "bg-gray-900 text-gray-400 border-gray-800 active:scale-95"
            }`}
          >
            &larr; Prev
          </button>

          <div className="flex flex-col items-center min-w-[50px]">
            <span className="text-emerald-500 font-black text-lg sm:text-2xl">
              {page}
            </span>
          </div>

          <button
            onClick={() => {
              setPage((prev) => prev + 1);
              window.scrollTo(0, 0);
            }}
            className="px-4 sm:px-6 py-2.5 bg-emerald-500 active:scale-95 text-black font-black text-[10px] sm:text-xs uppercase rounded-xl shrink-0"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultGrid;
