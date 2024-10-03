import '../App.css';
import './Header.css';
import logo from '../assets/Logo.svg';

import NavBar from './NavBar';

function Header() {
    return (
        <div className="ll-fixed-area">
            <header>
                <div className="ll-header-container  ll-margin-h-1rem ll-std-background">
                    <img src={logo} className="ll-header-img" alt="Little Lemon logo" />
                    <NavBar />
                </div>
            </header>
        </div>
    );
}

export default Header;