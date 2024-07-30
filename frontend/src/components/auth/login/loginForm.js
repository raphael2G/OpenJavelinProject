import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"


import { Link, useNavigate } from "react-router-dom";
import {useRef} from "react";


import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '@/firebase/firebase'





export default function LoginForm() {

  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { toast } = useToast()



  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/profile")
        toast({
          title: "Successfully logged in ",
          description: user.email,
        })
    })
    .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast({
            title: "Something went wrong trying to log you in ",
            description: "This email/password combination is incorrect"
          })
        } else {
          toast({
            title: "Something went wrong trying to log you in",
            description: "Please try again"
          })
        }
    });
  }

  return (
    <Card className="w-full max-w-sm bg-white">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input ref={emailRef} id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input ref={passwordRef} id="password" type="password" required />
        </div>

        <Button className="w-full" onClick={onLogin}>Sign in</Button>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </div>

      </CardContent>
    </Card>
  )
}

