import '../App.css';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <div class="ll-menu-container ll-margin-h-1rem ll-ft-karla-regular">
                <ul class="ll-menu-list">
                    <li class="ll-menu-item"><a href="#ll-Home">Home</a></li>
                    <li class="ll-menu-item"><a href="#ll-About">About</a></li>
                    <li class="ll-menu-item"><a href="#ll-Menu">Menu</a></li>
                    <li class="ll-menu-item"><a href="#ll-Reservation">Reservation</a></li>
                    <li class="ll-menu-item"><a href="#ll-OnlineOrdering">Online ordering</a></li>
                    <li class="ll-menu-item"><a href="#ll-Login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;