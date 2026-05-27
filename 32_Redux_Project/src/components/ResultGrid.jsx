//Step 1: Setup, Imports aur Redux State Access
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// 2.  Imports  API functions aur Redux actions
// import { fetchPhotos, fetchVideos, fetchGIPHY } from "../api/mediaApi";
// import { setLoading, setError, setResults } from "../features/SearchSlice";
// import { AirVent, Dumbbell } from "lucide-react";

const ResultGrid = () => {
  // 4. Dispatch function ko initialize kiya taaki baad mein actions bhej sakein
  const dispatch = useDispatch();

  // 5. Redux Store (search state) se saara maal-paani nikal liya
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) {
      return;
    }

    const goData = () => {
      console.log(
        `Bro , I am Ready for Calling API , And Query : ${query} || ActiveTab : ${activeTab}`,
      );
    };

    goData();
  }, [query, activeTab, dispatch]);

  // Abhi ke liye hum check karne ke liye ek simple return de rahe hain
  return (
    <div className="p-10 text-center">
      <p>
        Current Query: <strong>{query || "Kuch search nahi kiya"}</strong>
      </p>
      <p>
        Active Tab: <strong>{activeTab}</strong>
      </p>
    </div>
  );
};

export default ResultGrid;
