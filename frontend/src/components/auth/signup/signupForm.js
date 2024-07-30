import {Link, useNavigate} from "react-router-dom";
import {useRef} from "react";

import {auth} from "@/firebase/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"


export default function SignupForm() {

  const navigate = useNavigate();

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { toast } = useToast()


  const onSignUp = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/form")
          console.log("Successfully created user");
          console.log("User:", user);
          toast({
            title: "Successfully created user ",
            description: user.email,
          })
      })
      .catch((error) => {
        console.log(error.code)
          if (error.code === "auth/email-already-in-use") {
            toast({
              title: "Email already in use",
              description: "Login or signup with new email"
            })
          } else {
            toast({
              title: "Uh oh. Something went wrong",
              description: "Failed to create account. Please try again"
            })
          }
      });
  }


  return (
    <Card className="mx-auto max-w-sm bg-white">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input ref={firstNameRef} id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input ref={lastNameRef} id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              ref={emailRef}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input ref={passwordRef} id="password" type="password" />
          </div>
          <Button type="submit" className="w-full" onClick={onSignUp}>
            Create account
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
