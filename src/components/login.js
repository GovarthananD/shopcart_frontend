import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("");

    const handleLogin = async () => {
        const payload = {
            email: email,
            password: password,
        };
        const res = await fetch('http://localhost:8000/login', {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-type": "application/json" },
        })

        const data = await res.json();
        if(data.token){
            localStorage.setItem("token", data.token);
            alert("Login Success")
            setTimeout(navigateFunc, 2000);
        }else{
            setErr(data.error)
            alert("Email or password incorrect")
        }
    }
    const navigateFunc = () => {
        navigate("/home");
      };
    return (<div>

        <div className="login-card">
            <Container className="d-flex justify-content-center mt-5">
                <Form className="w-50">
                    <div><h1 className="login">LOGIN</h1></div>
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Control type="email" placeholder="Enter email" className="mx-auto" style={{ maxWidth: '300px' }} onChange={(event)=>setEmail(event.target.value)} value={email}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mb-3">
                        <Form.Control type="password" placeholder="Password" className="mx-auto" style={{ maxWidth: '300px' }} onChange={(event)=>setPassword(event.target.value)} value={password} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>New to shop?  <span className="span-register" onClick={() => navigate("/register")}>REGISTER</span></p>
                    </Form.Group>
                    <button id="but" type="submit" className="btn btn-primary mx-auto d-block" onClick={handleLogin}>Submit</button>
                </Form>
            </Container>
        </div>

    </div>)
}

export default Login;