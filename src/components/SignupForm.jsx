import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import { getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTJy0_LkcJTHe6XU5WNdyhbPdwFnMpqzQ",
  authDomain: "timber-login-js.firebaseapp.com",
  projectId: "timber-login-js",
  storageBucket: "timber-login-js.appspot.com",
  messagingSenderId: "210252509727",
  appId: "1:210252509727:web:0bf4b71fa2b1fd5bae5b2a",
  measurementId: "G-WQ9VZS6X9Q",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState()

  const handleSignup = async (e) => {
    e.preventDefault()
    const results = await createUserWithEmailAndPassword(auth,email,password)
    .catch(err=>alert(err))
    setUser(results.user)
  }


 const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  const results = await signInWithPopup(auth,provider)
  .catch(alert)
  setUser(results.user)
}

  if (user) {
    return <h2>Welcome user {user.uid}</h2>
  }

  return (
    <>
      <Form onSubmit = {handleSignup}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={e=> setEmail(e.target.value)}
            value = {email}
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value = {password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
          <Form.Group className="mb-3">
            <Button
              variant="success"
              size="lg"
              type="submit"

            >
              Sign Up
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>
      <Button variant = "dark" size = "lg" onClick={signInWithGoogle}>Sign in with Google</Button>
    </>
  );
}
