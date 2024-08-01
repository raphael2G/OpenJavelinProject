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
        console.log(JSON.parse(localStorage.getItem('submissions')))
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (!auth.currentUser) {
                navigate('/login');
                console.log(auth.currentUser);
            } else {
                if (!selectedSubmission && JSON.parse(localStorage.getItem('submissions')).length > 0) {
                    console.log("found submissions in local storage");
                    setSubmissions(JSON.parse(localStorage.getItem('submissions')));
                } else if (!selectedSubmission) {
                    console.log("failed to find submissions in local storage. fetching submissions from serverless function");
                    console.log(JSON.parse(localStorage.getItem('submissions')))
                    axios.get(process.env.REACT_APP_MONGODB_SEVERLESS_QUERY_BY_UID, 
                        {params: {
                        uid: auth?.currentUser?.uid
                        }}
                    )
                    .then(res => {
                        console.log(res.data);
                        setSubmissions(res.data);
                        localStorage.setItem('submissions', JSON.stringify(res.data));
                        console.log("local storage", JSON.parse(localStorage.getItem('submissions')))
                    })
                    .catch(err => {
                        console.log(err);
                    });
                }
            }
        }, 1000);
    }, [auth]);




    const handleSquareClick = (submission) => {
        if (selectedSubmission && submission?.createdAt === selectedSubmission?.createdAt) {
            setSelectedSubmission(null);
        } else {
            setSelectedSubmission(submission);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4 pt-[150px]">
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
                                {submission?.createdAt?.substring(0, 4)}
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
