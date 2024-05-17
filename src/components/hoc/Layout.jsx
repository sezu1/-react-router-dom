import React from 'react';
import {NavBar} from "../navBar/NavBar";
import {Footer} from "../footer/Footer";

export function Layout({children}) {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

