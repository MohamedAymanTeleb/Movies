import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from "react-router-dom";
import React, { useContext } from 'react';
import { languageContext } from '../../Contexts/langContext';

function Layout() {

    const { lang, setLang } = useContext(languageContext);
    console.log(lang);


    return (
        <>
            <div dir={lang == "en" ? "ltr" : "rtl"} className='container-fluid p-0'>
                <NavBar />
            </div>
            <div dir={lang == "en" ? "ltr" : "rtl"} className="mx-5">
                <Outlet />
            </div >
            <Footer />
        </>
    )
}

export default Layout