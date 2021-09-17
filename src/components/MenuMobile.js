import { Link } from "react-router-dom";

const MenuMobile = ({ email, isMenuOpen, handleLogout }) => {
    return (
        <section className={isMenuOpen ? "menu_mobile" : "menu_bobile menu_hidden"}>
            <span className="menu__email">{email}</span>
            <Link to="/sign-in" onClick={handleLogout} className="button menu__link">
                Выйти
            </Link>
        </section>
    );
};

export default MenuMobile;