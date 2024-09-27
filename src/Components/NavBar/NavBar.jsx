import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { useContext } from 'react';
import { languageContext } from '../../Contexts/langContext';
function NavBar() {

    const { lang, setLang } = useContext(languageContext);
    const changeLanguage = () => {
        // console.log(lang); // Why ? => should be the same names you declared
        setLang(lang == "en" ? "ar" : "en");
    };

    return (
        <Nav
            style={{ height: 50 }}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            className='bg-dark d-flex justify-content-evenly align-items-center '
        >
            <Nav.Item>
                <NavLink to={'/Home'} className="text-decoration-none text-white border rounded p-2">{lang == "en" ? "Home" : "الصفحة الرئيسية"}</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={'/Movies'} className="text-decoration-none text-white border rounded p-2">{lang == "en" ? "All Movies" : "كل الأفلام"}</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={'/Favorites'} className="text-decoration-none text-white border rounded p-2">{lang == "en" ? "Favorites" : "المفضلة"}</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={'/Login'} className="text-decoration-none text-white border rounded p-2">{lang == "en" ? "Login" : "تسجيل الدخول"}</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to={'/Register'} className="text-decoration-none text-white border rounded p-2">{lang == "en" ? "Register" : "انشاء حساب"}</NavLink>
            </Nav.Item>
            <Nav.Item>
                <div className="text-decoration-none text-white border rounded p-2" onClick={changeLanguage}>{lang == "en" ? "Arabic" : "الانجليزية"}</div>
            </Nav.Item>

        </Nav>
    );
}

export default NavBar;