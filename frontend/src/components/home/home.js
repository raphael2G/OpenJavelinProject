import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});

    }, []);



    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8 w-3/5">
                <div class="hero bg-cover bg-center h-screen flex items-center justify-center">
                    <div class="text-center text-black">
                        <h1 class="text-5xl font-bold mb-4">Open Javelin Project</h1>
                        <p class="text-xl mb-8">Unlocking the Secrets to Elite Javelin Performance</p>
                        <div class="flex justify-center space-x-4">
                            <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join the Study</Link>
                            <a href="/#about" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
                        </div>
                    </div>
                </div>

                <section id="about" className="bg-white shadow-lg rounded-lg p-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">About the Open Javelin Project</h2>
                        <p className="text-gray-700">
                        The Open Javelin Project is dedicated to understanding the physical attributes that contribute to elite javelin performance. By collecting and analyzing data from throwers worldwide, we aim to uncover the key metrics that lead to success in the sport.
                        </p>                    
                    </div>
                </section>

                <section data-aos="fade-up" id="how-it-works" class="py-12 text-center">
                    <div class="container mx-auto">
                        <h2 class="text-3xl font-bold mb-4">How It Works</h2>
                        <div class="flex flex-wrap justify-around">
                        <div class="w-full md:w-1/4 mb-6">
                            <div class="p-6 bg-white shadow-lg rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Data Collection</h3>
                            <p>Athletes submit their physical performance metrics and personal bests.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/4 mb-6">
                            <div class="p-6 bg-white shadow-lg rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Analysis</h3>
                            <p>Our team analyzes the data to find patterns and correlations.</p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/4 mb-6">
                            <div class="p-6 bg-white shadow-lg rounded-lg">
                            <h3 class="text-xl font-bold mb-2">Results</h3>
                            <p>We share our findings with the community to help athletes and coaches optimize training programs.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Our Discoveries</h2>
                        <p className="text-gray-700 mb-4">
                        Discover the insights we've gathered from our research. Our analysis reveals the physical attributes that correlate most with elite javelin performance.</p>

                        <Link to="/discoveries" className="text-blue-500 hover:text-blue-700 transition font-medium">
                            See our Discoveries
                        </Link>
                    </div>
                </section>

                <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Join The Project</h2>
                        <p className="text-gray-700 mb-4">
                            In order to become the world's largest collection of physical benchmarked data for the javelin, we need help from throwers like you. Click below to create an account and contribute your data. 
                        </p>
                        <Link to="/signup" className="text-blue-500 hover:text-blue-700 transition font-medium">
                            Join the Study
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
}
