
import '../App.css';
import './Footer.css';

import footerImg from '../assets/little lemon logo-vertical.png';

function Footer() {
    return (
        <footer>
            <div class="ll-footer-container ll-margin-h-1rem ll-footer-background">
                <img src={footerImg} class="ll-footer-img" alt="" />
                <div class="ll-footer-section-container ll-ft-karla-medium">
                    <section class="ll-footer-section">
                        <h3>Doormat<br />Navigation</h3>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Reservation</p>
                        <p>Online Ordering</p>
                        <p>Login</p>
                    </section>
                    <section class="ll-footer-section">
                        <h3>Contact</h3>
                        <p>Address</p>
                        <p>Phone number</p>
                        <p>Email</p>
                    </section>
                    <section class="ll-footer-section">
                        <h3>Social Media Links</h3>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>X</p>
                    </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
