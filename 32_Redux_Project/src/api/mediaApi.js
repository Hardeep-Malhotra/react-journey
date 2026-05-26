import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 15) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: query,
        page: page,
        per_page: per_page,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY.trim()}`,
      },
    });

    console.log("Unsplash Photos Data : ", response.data.results);
    return response.data.results;
  } catch (error) {
    if (error.response) {
      console.error("Unsplash Error Status:", error.response.status);
      console.error("Unsplash Error Body:", error.response.data);
    } else {
      console.error("Axios Error:", error.message);
    }
    return [];
  }
}

export async function fetchVideos(query = "nature", page = 1, per_page = 13) {
  try {
    const response = await axios.get(
      "https://api.pexels.com/v1/videos/search",
      {
        params: {
          query,
          page,
          per_page,
        },
        headers: {
          Authorization: String(PEXELS_KEY).trim(),
        },
      },
    );
    console.log("Pexels Videos Data:", response.data.videos);
    return response.data.videos;
  } catch (error) {
    if (error.response) {
      console.log("Pexels Error Status : ", error.response.status);
      console.log("Pexels Error Body : ", error.response.body);
    } else {
      console.error("Axios Error : ", error.message);
    }
  }
}
export async function fetchGIPHY() {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: GIPHY_KEY,
        limit: 15,
      },
    });
    console.log("GIPHY Data:", response.data.data);
    return response.data.data;
  } catch (error) {
    if (error.response) {
      console.log("GIPHY Error Status : ", error.response.status);
      console.log("GIPHY Error Body : ", error.response.body);
    } else {
      console.error("Axios Error : ", error.message);
    }
  }
}
