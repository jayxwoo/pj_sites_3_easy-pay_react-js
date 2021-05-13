import { Link, NavLink } from "react-router-dom"
import Button from "./Button"
import Logo from "./Logo"
import { MdMenu, MdClose } from "react-icons/md";
import { useContext, useState } from "react";
import { IsMobileContext } from "../contexts/IsMobileContext";

const Navbar = () => {
    const [menuBtn, setMenuBtn] = useState(false);
    const { isMobile } = useContext(IsMobileContext);

    const handleMenuBtnClick = () => {
        if (isMobile) {
            setMenuBtn(!menuBtn);
        };
    };

    const closeMenu = () => {
        if (isMobile) {
            setMenuBtn(false);
        };
    };

    window.addEventListener('resize', () => {
        if (!isMobile) {
            setMenuBtn(false);
        };
    });

    return (
        <header className="header">
            <div className="header-container">
                <Logo className="header__logo" onClick={closeMenu} />
                <nav className={menuBtn ? "header__nav header__nav--active" : "header__nav"}>
                    <ul className="header__menu-group">
                        <li className="header__menu-item"><NavLink exact to="/" className="header__menu-link" onClick={closeMenu}>Home</NavLink></li>
                        <li className="header__menu-item"><NavLink to="/services" className="header__menu-link" onClick={closeMenu}>Services</NavLink></li>
                        <li className="header__menu-item"><NavLink to="/products" className="header__menu-link" onClick={closeMenu}>Products</NavLink></li>
                    </ul>
                    <Link to="/signup"><Button onClick={closeMenu} className="header__btn-signup" btnStyle="btn-outline--white" btnSize={isMobile ? "btn--mobile" : "btn--medium"}>Sign Up</Button></Link>
                </nav>
                    {isMobile && <button aria-label="menu button" className="header__menu-btn" onClick={handleMenuBtnClick}>{menuBtn ? (<MdClose className="header__menu-icon header__menu-icon--close" />) : (<MdMenu className="header__menu-icon header__menu-icon--menu" />)}</button>}
            </div>
        </header>
    );
}

export default Navbar;