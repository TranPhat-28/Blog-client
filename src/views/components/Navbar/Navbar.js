import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {

    const { user, setUser } = useContext(AuthContext);

    // Logout
    const logout = () => {
        // Remove from local storage
        localStorage.removeItem('user');
        // Remove from AuthContext
        setUser(null);
    }

    return (
        <div className='nav-container'>
            <div className='nav-brand'>
                <h3>
                    <Link to='/'>TheBlogsSite</Link>
                </h3>
            </div>

            <div className='options-container'>
                {user && (
                    <div>
                        <button className='button'>
                            <Link to='/newPost'>New post</Link>
                        </button>
                        <button className='button ms-2' onclick={logout}>Logout</button>
                    </div>
                )}

                {!user && (
                    <div>
                        <button className='button'>
                            <Link to='/login'>Login</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;