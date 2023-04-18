import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import LoginForm from "./LoginForm";
//className = "bg-danger"

export default function Login () {
  return (
    <Container>
      <Row>
        <Col  className = 'mx-4 p-5 rounded-3 login-container'>
        <LoginForm/>
        </Col>
      </Row>
    </Container>
  )
}

