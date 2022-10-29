import axios from "axios";

export const BASE_URL = "https://advanced-movie-search.p.rapidapi.com";

const options = {
  headers: {
    'X-RapidAPI-Key': '517e23a6d8msh138d75aab2b0f00p131290jsn19e935cddc39',
    'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}