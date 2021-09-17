import logo from '../images/logo.svg'
import { Route, Switch, Link } from "react-router-dom";

function Header({ handleLogout, email, toggleMenu, isMenuOpen }) {
    return (
        <header className="header section">
            <button href="#" target="_blank" className="header__logo-link link-animation"><img src={logo} alt="Логотип" className="header__logo" /></button>
            <Switch>
                <Route exact path="/">
                    <div className="header__info">
                        <span className="header__email">{email}</span>
                        <Link
                            to="/signin"
                            onClick={handleLogout}
                            className="button header__link"
                        >
                            Выйти
                        </Link>
                    </div>

                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <div
                            className={
                                isMenuOpen ? "humburger-menu__menu humburger-menu__menu_clicked" : "humburger-menu__menu"
                            }
                        ></div>
                    </div>
                </Route>

                <Route path="/signin">
                    <Link to="/signup" className="button header__link">
                        Регистрация
                    </Link>
                </Route>

                <Route path="/signup">
                    <Link to="/signin" className="button header__link">
                        Войти
                    </Link>
                </Route>
            </Switch>
        </header>
    );
}

export default Header;