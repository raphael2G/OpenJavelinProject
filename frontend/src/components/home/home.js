import './home.css'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div id="mainContainer">
                <h1>Home</h1>

                <Link to="/about" className="section">
                    <div>
                        <h2> Learn More!</h2>
                        <p>This is a paragraph about what we do.</p>
                    </div>
                </Link>

                <Link to="/form" className="section">
                    <div>
                        <h2> Call to action!</h2>
                        <p>Click here to fill out the form</p>
                    </div>
                </Link>
                
            </div>
        </>
    );
}