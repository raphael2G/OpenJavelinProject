import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"



export default function Header ({isLoggedin, auth}) {
    const navigate = useNavigate();
    const { toast } = useToast()


    const onSignOut = () => {
        console.log("Signing Out: ", auth);
        auth.signOut();
        navigate('/');
        toast({
            title: "Successfully signed out"
          })
    }

    return (
        <>
            <header className="bg-white shadow-sm fixed z-20 w-full">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link to="/"><div className="text-xl font-bold"> Open Javelin Project</div></Link>
                <ul className="flex space-x-6">
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
            </div>
            </header>
        </>
    );
}