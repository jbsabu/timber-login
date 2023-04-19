import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState()
  const handleForm = (e) => {
    const newValue = e.target.value.trim();
    console.log(e.target, newValue);
  };

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await signInWithEmailAndPassword(auth,email,password)
    .catch(err=>alert(err));
    setUser(response.user)
    console.log(response.user)

  }

  if (user) {
    return <h1>Welcome User! {user.uid}</h1>
  }
  return (
    <>
      <Form onSubmit = {handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control // email
            type="email"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
            value = {email}
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control // password
            type="password"
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
            value = {password}
          ></Form.Control>
          <Form.Group className="mb-3">
            <Button
              variant="success"
              size="lg"
              type="submit"
              onChange={handleForm}
            >
              Login
            </Button>
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
}
