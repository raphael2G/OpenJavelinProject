import './header.css'
import { Link } from 'react-router-dom';



export default function Header ({isLoggedin, auth}) {

    return (
        <>
            <header className='header'>
                <ul className = 'ul'>
                    <i><Link to="/signup">Sign Up</Link></i>
                    <i><Link to="/about">About</Link></i>
                    <i><Link to="/form">Form</Link></i>
                    <i>
                        {isLoggedin ? (
                            <button onClick={() => auth.signOut()}>Sign Out</button>
                        ) : (
                            <Link to="/login">Login</Link>
                        )}
                    </i>
                </ul>
            </header>
        </>
    );
}