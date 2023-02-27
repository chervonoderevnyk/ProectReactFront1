import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genreActions} from "../../redux/slices";
import {Genre} from "../Genre";

const Genres = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.genresAll())
    },[dispatch])

    return (
        <div>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};