import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"



export default function Header ({isLoggedin, auth}) {
    const navigate = useNavigate();
    const { toast } = useToast()


    const onSignOut = () => {
        console.log("Signing Out: ", auth);
        auth.signOut();
        localStorage.setItem('submissions', JSON.stringify([]));
        navigate('/');
        toast({
            title: "Successfully signed out"
          })
    }

    return (
        // <>
        //     <header className="bg-white shadow-sm fixed h-16 t-0 z-50 w-full">
        //     <div className="container mx-auto flex justify-between items-center p-4">
        //         <Link to="/"><div className="text-xl font-bold"> Open Javelin Project</div></Link>
        //         <ul className="flex space-x-6">
        //             <li className="hover:text-blue-500">
        //                 <Link to="/discoveries">Discoveries</Link>
        //             </li>
        //             {isLoggedin ? (
        //                 <>
        //                 <li className="hover:text-blue-500">
        //                     <Link to="/profile">Profile</Link>
        //                 </li>
        //                 <li
        //                     className="hover:text-blue-500 cursor-pointer"
        //                     onClick={onSignOut}
        //                 >
        //                     Sign Out
        //                 </li>
        //                 </>
        //             ) : (
        //                 <li className="hover:text-blue-500">
        //                 <Link to="/login">Login</Link>
        //                 </li>
        //             )}
        //         </ul>
        //     </div>
        //     </header>
        // </>

    <>
    <header className="bg-white shadow-sm fixed top-0 z-50 w-full h-16">
        <div className="container mx-auto flex justify-center md:justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link to="/">
            <div className="text-xl py-4 sm:text-xl font-bold">Open Javelin Project</div>
        </Link>
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
            <li className="hover:text-blue-500">
            <Link to="/discoveries">Discoveries</Link>
            </li>
            {isLoggedin ? (
            <>
                <li className="hover:text-blue-500">
                <Link to="/profile">Profile</Link>
                </li>
                <li
                className="hover:text-blue-500 cursor-pointer"
                onClick={onSignOut}
                >
                Sign Out
                </li>
            </>
            ) : (
            <li className="hover:text-blue-500">
                <Link to="/login">Login</Link>
            </li>
            )}
        </ul>

        {/* Mobile Menu Toggle */}
        {/* <div className=" md:hidden">
            <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            </button>
        </div> */}


    </div>
    </header>
    </>

    );
}