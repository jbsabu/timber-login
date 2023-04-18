import './App.css';
import Footer from './components/Footer';
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Login from './components/Login'
import Signup from './components/Signup'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
