import './profile.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';



export default function Profile({uid}) {
    const navigate = useNavigate();

    const [submissions, setSubmissions] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);

    useEffect(() => {

        axios.get(`http://localhost:5001/api/userData/uid/${auth?.currentUser?.uid}`)
        .then(res => {
            console.log(res.data);
            setSubmissions(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, [uid]);

    const handleSquareClick = (submission) => {
        setSelectedSubmission(submission);
        console.log(submission);
    };


    return (
        <div id="mainContainer">
            <div class="section">
                <h1>Profile</h1>
            </div>

            <div id="barContainer">
                <div id="submissionHistoryBar">
                    {submissions.map((submission, index) => 
                        <h1 
                            class="yearSquare" 
                            key={index} 
                            onClick={() => handleSquareClick(submission)}
                            style={{ cursor: 'pointer' }}
                        >
                            {submission.createdAt.substring(0, 4)}
                        </h1>
                    )}
                </div>

                <div id="addSubmissionButton">
                    <button onClick={() => navigate('/form')}>Add Submission</button>
                </div>
            </div>

            {selectedSubmission && (
                <div className="submissionDetails">
                <h2>Submission Details</h2>
                <p><strong>Date:</strong> {new Date(selectedSubmission.createdAt).toLocaleDateString()}</p>
                <p><strong>Weight:</strong> {selectedSubmission.bodyInformation.weight}</p>
                <p><strong>Personal Best:</strong> {selectedSubmission.personalInformation.personalBest}</p>
                {/* Add other data fields as necessary */}
                </div>
            )}
        </div>
    )
}