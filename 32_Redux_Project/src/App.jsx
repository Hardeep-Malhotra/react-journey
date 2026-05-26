import { fetchGIPHY, fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  function getPhotos() {
    fetchPhotos("cat");
  }

  function getVideos() {
    fetchVideos();
  }

  function getGIPHY() {
    fetchGIPHY();
  }

  return (
    <div className="h-screen w-full text-white bg-gray-900">
      <button
        onClick={getPhotos}
        className="px-2 py-0.5   border-2 rounded-2xl hover:bg-pink- transform-3d"
      >
        Get Photos Data{" "}
      </button>
      <button
        onClick={getVideos}
        className="px-2 py-0.5   border-2 rounded-2xl hover:bg-pink- transform-3d"
      >
        Get Video Data{" "}
      </button>
      <button
        onClick={getGIPHY}
        className="px-2 py-0.5   border-2 rounded-2xl hover:bg-pink- transform-3d"
      >
        Get GIF Data{" "}
      </button>
    </div>
  );
};

export default App;
