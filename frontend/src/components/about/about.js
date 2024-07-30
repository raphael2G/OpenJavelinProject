import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-8">
                {/* <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Welcome to the About Page</h1> */}

                <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">What We Do</h2>
                        <p className="text-gray-700">
                        Our mission is to gather comprehensive data on javelin throwers' physical performances to identify which attributes correlate with high-level achievements in the sport.                        </p>
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
                        <h2 className="text-3xl font-semibold mb-4">The Process</h2>
                        <p className="text-gray-700">
                            Step 1: Register on our platform.
                        </p>
                        <p className="text-gray-700">
                            Step 2: Fill out the detailed performance form, including metrics such as strength, speed, agility, and more.
                        </p>
                        <p className="text-gray-700">
                            Step 3: Submit your personal records and performance data.
                        </p>
                        <p className="text-gray-700">
                            Step 4: Our team analyzes the data to identify key performance indicators.
                        </p>
                    </div>
                </section>

                <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Our Findings</h2>
                        <p className="text-gray-700 mb-4">
                            Sign up for our newsletter to stay updated with the latest news and updates.
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 border border-gray-300 rounded-md mb-4"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
                            Subscribe
                        </button>
                    </div>
                </section>

                <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
                        <div className="flex justify-center space-x-6">
                            <a href="https://facebook.com" className="text-blue-700 hover:text-blue-900">
                                Facebook
                            </a>
                            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
                                Twitter
                            </a>
                            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800">
                                Instagram
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
