import axios from "axios";

//base api https://api.themoviedb.org/3/

//https://api.themoviedb.org/3/movie/now_playing?api_key=d3d510de8a2e6dfd5b1c27a0a83124c1

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;