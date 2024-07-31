import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BackgroundBeams } from '../ui/background-beams';
import NavBar from '@/components/navbar/navbar';


import About from '@/components/about/newAbout';
import People from '@/components/people/people';
import Discoveries from '@/components/discoveries/discoveries';
import Discovery from '@/components/discoveries/discovery';


export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true});

    }, []);



    return (
        <div className="bg-gray-100 min-h-screen">

            <div className="h-[65rem] w-full rounded-md bg-neutral-100 relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-2xl mx-auto p-4">
                    <h1 className="relative z-10 p-2 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-t from-neutral-900 to-neutral-950  text-center font-sans font-bold">
                    Open <span className="text-blue-500">Javelin</span> Project
                    </h1>
                    <p className="text-neutral-500 pb-4 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
                    Unlocking the Secrets to Elite Javelin Performance
                    </p>

                    <div class="flex justify-center space-x-4">
                        <Link to="/signup" className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Join the Study</Link>
                        <a href="/#about" className="z-10 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
                    </div>
                </div>
                <BackgroundBeams />

            </div>

            <NavBar/>


            <div className="container mx-auto p-8">
                

                <section id="about" className="bg-green shadow-lg rounded-2xl">

                    <About/>

                </section>


                <section id="people" className="bg-white shadow-lg rounded-lg p-6 m-10">
                    <People/>
                </section>


                <section data-aos="fade-up" id="how-it-works" class="py-12 text-center">
                    <div class="container mx-auto mb-10">
                        <h2 class="text-3xl font-bold mb-8">How It Works</h2>
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

                    <section id="discoveries" className="bg-white shadow-lg rounded-lg p-6 m-10">
                        <Discovery/>
                    </section>

                    {/* <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 mb-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold mb-4">Our Discoveries</h2>
                            <p className="text-gray-700 mb-4">
                            Discover the insights we've gathered from our research. Our analysis reveals the physical attributes that correlate most with elite javelin performance.</p>

                            
                        </div>
                    </section> */}
                </section>

                
                

                <section data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <div className="max-w-2xl mx-auto p-4">
                        <h1 className="relative z-10 p-2 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-t from-neutral-900 to-neutral-950  text-center font-sans font-bold">
                        Join the <span className="text-blue-500">Project</span>
                        </h1>
                        <p className="text-neutral-500 pb-4 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
                        It'll only take 10 minutes
                        </p>

                        <div class="flex justify-center space-x-4">
                            <Link to="/signup" className="z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get started now</Link>
                        </div>
                    </div>

                    <svg
                        viewBox="0 0 1024 1024"
                        aria-hidden="true"
                        className="absolute z-0 left-1/2 top-3 z-0 h-[16rem] w-[16rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                    >
                        <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                        <defs>
                        <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" />
                        </radialGradient>
                        </defs>
                    </svg>
                </section>

            </div>
        </div>
    );
}
