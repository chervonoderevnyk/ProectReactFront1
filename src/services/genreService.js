import {apiService} from "./apiService";
import {genres} from "../configs";


const genreService = {
    genresAll: () => apiService.get(genres)
};

export {genreService}
