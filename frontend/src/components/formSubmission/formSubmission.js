// FormSubmission.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormSubmission.css';

import Confetti from 'react-confetti'; 
export default function FormSubmission() {
    const navigate = useNavigate();


    return (
        <div className="submission-container">
            {/* reccomended to use width and height props through hook. don't think it is a big deal */}
            <Confetti recycle={false} numberOfPieces={10000} tweenDuration={50000}/> 

            <div className="hero-section">
                <h1>Thank You!</h1>
                <div className="confetti"></div>
                <p>Your submission has been received.</p>
            </div>
            <div className="content-section">
                <h2>How Your Data Helps</h2>
                <p>Your data helps us understand how physical metrics influence javelin performance. Your contribution is vital to our research.</p>
                <h2>Key Insights So Far</h2>
                <p>So far, we've learned that...</p>
                <p>Early data indicates that...</p>
                <h2>Next Steps</h2>
                <p>What happens next? Stay tuned for updates and further results.</p>
            </div>
            <div className="share-feedback-section">
                <h2>Share This Project</h2>
                <button onClick={() => window.open('https://twitter.com/share?url=https://openjavelinproject.com', '_blank')}>Share on Twitter</button>
                <button onClick={() => window.open('https://facebook.com/sharer/sharer.php?u=https://openjavelinproject.com', '_blank')}>Share on Facebook</button>
                <h2>We Value Your Feedback</h2>
                <p>Please take a moment to tell us about your experience.</p>
                <button onClick={() => navigate('/feedback')}>Give Feedback</button>
            </div>
            <div className="navigation-section">
                <button onClick={() => navigate('/')}>Go to Home Page</button>
                <button onClick={() => navigate('/form')}>Fill Out Another Form</button>
                <button onClick={() => navigate('/explore')}>Explore More</button>
            </div>
        </div>
    );
}
