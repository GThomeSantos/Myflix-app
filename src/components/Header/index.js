import './header.css';

import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <Link to='/' className='logo'>MyFlix Home</Link>
            <Link to='/favorites' className='favorites'>My Favorites</Link>
        </header>
    )
}

export default Header;