import {Outlet} from "react-router-dom";

import {Header, Movies} from "../components";
import css from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={css.MainLayout}>
            <div>
                <Header/>
                <Outlet/>
            </div>

            <div>
                <div style={{fontSize: 18, backgroundColor: 'rgba(0,0,0,0.45)', position: 'fixed', margin: 400, textAlign: "center"}}>
                    Сайт у стадії глибокої розробки! Завітайте пізніше і будете безкоштовно і приємно здивовані. Гарного
                    перегляду!!!
                </div>
                <Movies/>

                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};