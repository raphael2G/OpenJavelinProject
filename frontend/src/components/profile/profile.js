import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Profile({ uid }) {
    const navigate = useNavigate();

    const [submissions, setSubmissions] = useState([]);
    const [selectedSubmission, setSelectedSubmission] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
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
        if (selectedSubmission && submission?.createdAt === selectedSubmission?.createdAt) {
            setSelectedSubmission(null);
        } else {
            setSelectedSubmission(submission);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="container mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h1 className="text-4xl font-bold text-center mb-4">Submission History</h1>
                </div>

                <div className="flex justify-between items-center mb-8">
                    <div className="flex overflow-x-auto space-x-4 p-4 bg-white shadow-md rounded-lg">
                        {submissions.map((submission, index) => (
                            <div
                                key={index}
                                onClick={() => handleSquareClick(submission)}
                                className={`yearSquare cursor-pointer p-2 rounded-lg ${selectedSubmission?.createdAt === submission.createdAt ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                {submission.createdAt.substring(0, 4)}
                            </div>
                        ))}
                    </div>

                    <button
                        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
                        onClick={() => navigate('/form')}
                    >
                        Add Submission
                    </button>
                </div>

                {selectedSubmission && (
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Submission Details</h2>
                        <p><strong>Date:</strong> {new Date(selectedSubmission.createdAt).toLocaleDateString()}</p>
                        <p><strong>Weight:</strong> {selectedSubmission.bodyInformation.weight}</p>
                        <p><strong>Personal Best:</strong> {selectedSubmission.personalInformation.personalBest}</p>
                        {/* Add other data fields as necessary */}
                    </div>
                )}
            </div>
        </div>
    );
}
