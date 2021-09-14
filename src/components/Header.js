import logo from '../images/logo.svg'

function Header() {
    return (
        <header className="header"> 
                        <button href="#" target="_blank" className="header__logo-link link-animation"><img src={logo} alt="Логотип" className="header__logo" /></button> 
                    </header> 
    );
}

export default Header;