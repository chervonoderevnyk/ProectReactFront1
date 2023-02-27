import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {Genres} from "./components";


const App = () => {

    return (
        <Routes>

            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'genres'}/>}/>
                <Route path={'genres'} element={<Genres/>}/>

                <Route path={'movies'} element={<MoviesPage/>}/>

            </Route>
        </Routes>
    );
};

export {App};