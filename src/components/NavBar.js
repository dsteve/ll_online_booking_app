import '../App.css';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <div className="ll-menu-container ll-margin-h-1rem ll-ft-karla-medium">
                <ul className="ll-menu-list">
                    <li className="ll-menu-item"><a href="#ll-Home">Home</a></li>
                    <li className="ll-menu-item"><a href="#ll-About">About</a></li>
                    <li className="ll-menu-item"><a href="#ll-Menu">Menu</a></li>
                    <li className="ll-menu-item"><a href="#ll-Reservation">Reservation</a></li>
                    <li className="ll-menu-item"><a href="#ll-OnlineOrdering">Online ordering</a></li>
                    <li className="ll-menu-item"><a href="#ll-Login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;