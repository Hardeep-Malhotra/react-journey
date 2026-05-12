import React, { useEffect } from "react";
import axios from "axios";

export const App = () => {
  const [userData, setUserData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const respond = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=15`,
      );
      setUserData(respond.data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  // Variable to handle display logic
  let displayContent = (
    <div className="col-span-full text-center text-gray-500 mt-10 text-xl italic">
      No User Data Available. Click the green button!
    </div>
  );

  if (userData && userData.length > 0) {
    displayContent = userData.map((user) => (
      <div
        key={user.id}
        className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition-all duration-300 hover:shadow-green-500/20"
      >
        {/* Image Container */}
        <div className="h-64 overflow-hidden">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            src={user.download_url}
            alt={user.author}
          />
        </div>

        {/* Author Info Overlay */}
        <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <h2 className="text-sm font-medium text-white truncate">
            📸 {user.author}
          </h2>
          <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">
            ID: {user.id}
          </p>
        </div>
      </div>
    ));
  }
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-6">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Photo Gallery Pro
        </h1>
        <button
          className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-full font-bold transition-all active:scale-90 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          onClick={getData}
        >
          Fetch Fresh Data
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-64">
          {/* Mast Tailwind Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500 mb-4"></div>
          <p className="text-green-500 font-medium animate-pulse">
            Fetching awesome photos...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {displayContent}
        </div>
      )}

      {/* <div>
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {"< Previous"}
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {"> Next"}
        </button>
      </div> */}

      {!isLoading && (
        <div className="flex justify-center items-center gap-6 mt-12 mb-10">
          <button
            disabled={page === 1} // Page 1 pe 'Back' disable rahega
            className="bg-gray-700 px-6 py-2 rounded-lg disabled:opacity-30 active:scale-90 transition-all"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            {"< Previous"}
          </button>

          <span className="text-xl font-bold text-green-500">Page {page}</span>

          <button
            className="bg-green-600 px-6 py-2 rounded-lg active:scale-90 transition-all"
            onClick={() => setPage(page + 1)}
          >
            {"Next >"}
          </button>
        </div>
      )}
    </div>
  );
};
