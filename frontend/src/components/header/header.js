import './header.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Header ({isLoggedin, auth}) {
    const navigate = useNavigate();

    const onSignOut = () => {
        console.log("Signing Out: ", auth);
        auth.signOut();
        navigate('/');
    }

    return (
        <>
            <header className='mainContainer'>
                <ul className = 'ul'>
                    <i><Link to="/">Home</Link></i>
                    <i><Link to="/about">About</Link></i>
                    {isLoggedin ? (
                        <>
                            <i><Link to="/profile">Profile</Link></i>
                            <i> <button onClick={onSignOut}>Sign Out</button> </i>
                        </>
                    ) : (
                        <i> <Link to="/login">Login</Link> </i>
                    )}
                </ul>
            </header>
        </>
    );
}