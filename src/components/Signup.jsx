import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import SignupForm from "./SignupForm";

  export default function Signup (){
   
   return (
  <>
  <Container>
    <Row>
      <Col className="mx-4 p-4 rounded-3 login-container">
        <h1>Sign Up</h1>
        <SignupForm />
      </Col>
    </Row>
  </Container>
  </>
    )
  }