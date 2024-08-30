import '../App.css';
import './Main.css';

import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
    return (
        <main>
            <div id="ll-Home" class="ll-main-container ll-margin-h-1rem ll-temporary-background">
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
            </div>
        </main>
    );
}

export default Main;