import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux";
import {Movie} from "../Movie";
import css from './Movies.module.css'

const Movies = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    console.log(movies);

    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch])

    return (
        <div>

            <div className={css.Movies1}>
                {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>

        </div>
    );
};

export {Movies};



// {page: query.get('page')}