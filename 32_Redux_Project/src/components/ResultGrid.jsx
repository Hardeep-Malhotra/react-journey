import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIPHY } from "../api/mediaApi";
import { setLoading, setError, setResults } from "../features/SearchSlice";

// Tip: Agar ResultCard component pehle se bana hai toh theek, nahi toh hum standard inline card render karenge
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) return;

    const goData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];

        // Case 1 : PHOTOS
        if (activeTab === "photos") {
          let responseArr = await fetchPhotos(query);
          if (Array.isArray(responseArr)) {
            data = responseArr.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description || "Beautiful Image",
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
        }

        // CASE 2 : VIDEOS
        else if (activeTab === "videos") {
          let responseArr = await fetchVideos(query);
          if (Array.isArray(responseArr)) {
            data = responseArr.map((item) => ({
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
        }

        // CASE 3 : GIFs
        else if (activeTab === "gif") {
          let responseArr = await fetchGIPHY(query);
          const giphyItems = responseArr || [];

          data = giphyItems.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "Trending GIF",
            thumbnail:
              item.images?.fixed_width?.url ||
              item.images?.fixed_width_small?.url,
            src: item.images?.original?.url,
            url: item.url,
          }));
        }

        console.log("Clean Standard Data to Redux: ", data);
        dispatch(setResults(data));
      } catch (err) {
        console.error("Oops! API fail ho gayi: ", err.message);
        dispatch(setError(err.message));
      }
    };

    goData();
  }, [query, activeTab, dispatch]);

  // Loading UI State
  if (loading) {
    return (
      <div className="w-full text-center py-20">
        <div className="inline-block w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-xl mt-4 font-semibold text-gray-600 animate-pulse">
          Fetching premium {activeTab}...
        </h1>
      </div>
    );
  }

  // Error UI State
  if (error) {
    return (
      <div className="w-full text-center py-20 px-4">
        <h1 className="text-2xl font-bold text-red-500">
          Something went wrong!
        </h1>
        <p className="text-gray-500 mt-2">{error}</p>
      </div>
    );
  }

  // Handle No Results Found
  if (!loading && query && results?.length === 0) {
    return (
      <div className="w-full text-center py-20">
        <h1 className="text-xl font-medium text-gray-500">
          No premium {activeTab} found for "{query}".
        </h1>
      </div>
    );
  }

  // --- STEP 5: FINAL RENDER GRID ---
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Premium CSS Grid - Completely Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results?.map((item, idx) => {
          return (
            <div key={item.id || idx} className="h-full">
              {/* Agar ResultCard component ready hai toh item pass kar do */}
              <ResultCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultGrid;
