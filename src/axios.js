import axios from "axios";
// basically a base url to make request on multiple things from the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;