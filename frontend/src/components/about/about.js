import './about.css';


export default function About() {
    return (
        <>
            <div id="mainContainer">


                <h1>Welcome to the About Page</h1>

                <div className="section">
                    <h2>What we do</h2>
                    <p>This is a paragraph about what we do.</p>
                </div>

                <div className="section">
                    <h2>Our Methods</h2>
                    <p>This is a paragraph about why you'd want to do this.</p>
                </div>

                <div className="section">
                    <h2>Our Findings</h2>
                    <p>This is a paragraph about what we found.</p>
                </div>
                
            </div>
        </>
    );
}