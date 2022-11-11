import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';
const API_KEY = 'e53586c8cd89f142972aba5f1ce276f3';


const options = {
  params: {
    'api_key':API_KEY
  }
};

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}


// const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
