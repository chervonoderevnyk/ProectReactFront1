import css from './Movie.module.css'
import {images} from "../../configs";
import CustomizedRating from "../../demo";


const Movie = ({movie}) => {
    const {poster_path, title, vote_average} = movie;

    const rating = CustomizedRating(`${vote_average}`);

    return (
        <div className={css.Movie}>
            <div className={css.MovieImage}>

                {<img src={`${images}${poster_path}`} alt={""}/>}

                <div className={css.Movie2}>

                    <div className={css.button}><button>Inform</button></div>

                    <div className={css.button}><button>Poster</button></div>
                </div>
            </div>
            <div className={css.MovieTitle}> {title}</div>
            <div className={css.MovieStars}>{rating}</div>
            {/*<div>vote_average: {vote_average}</div>*/}
        </div>
    );
};

export {Movie};
