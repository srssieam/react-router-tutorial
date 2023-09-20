import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-style'>
            <h2>Welcome to my Website</h2>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a> */}
                {/* <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/users">Users</Link> */}
                <NavLink to="/">Home</NavLink>       {/* NavLink add a class named active, when the link is clicked */}
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;