import Footer from "./footer";
import Navbar1 from "./navbar";
import Button from "react-bootstrap/Button";

function Register() {
    return (
        <div className="App">
        <Navbar1></Navbar1>
        <div className="Container text-center px-4 my-5">
            <h3>Become a part of our Platform Today!</h3>
            <div className="text-center">
                <Button className="register-button p-5" variant="outline-success" href="/registerlec"><h3>Lecturer</h3></Button>
                <Button className="register-button p-5" variant="outline-success"><h3>Student</h3></Button>
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default Register;