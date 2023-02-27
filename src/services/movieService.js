import {apiService} from "./apiService";
import {movies} from "../configs";


const movieService = {
    getAll: (page = 1) => apiService.get(movies, {params: {page}})

};

export {movieService}


