import css from './Header.module.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className={css.Header}>

            <div><Link to={'genres'}>genres</Link></div>

            <div><Link to={'search'}>search</Link></div>

            <div className={css.buttonUser}>
                <button>user</button>
            </div>

        </div>
    );
};

export {Header};

