import {Movies} from "../components";
import {Outlet} from "react-router-dom";


const MoviesPage = () => {

    return (
        <div>

            <Movies/>
            <Outlet/>

        </div>
    );
};

export {MoviesPage};