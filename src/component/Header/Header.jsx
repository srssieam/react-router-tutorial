import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-style'>
            <h2>Welcome to my Website</h2>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a> */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
            </nav>
        </div>
    );
};

export default Header;