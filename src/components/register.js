import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Container } from 'react-bootstrap';
import axios from "axios";



function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    // const handleRegister = () => {  
    //      const newUser = {
    //          name: name,
    //          email: email,
    //          password: password,
    //      };

    //      fetch(`http://localhost:8000/register`, {
    //          method: "POST",
    //          headers: { "Content-Type": "application/json" },
    //          body: JSON.stringify(newUser),
    //      })
    //          .then((res) => {
    //              res.json();

    //              if (res.status === 201) {
    //                   alert("Registered Successfully");
    //                  setTimeout(navigateFunc, 1000);
    //              } else {
    //                  console.log("Something went wrong!")
    //              }
    //          })
    //          .then((data) => console.log(data))
    //          .catch((error) => {
    //              console.log(error);
    //              alert("Something error in Registering User" + error);
    //          });       
    // }

    // const navigateFunc = () => {
    //     navigate("/");
    //   };

    const handleSubmit = async () => {
        setMessage('')
        setLoading(true);
        try{
            const response = await axios.post('http://localhost:8000/register', {name, email, password})
            setMessage(response.data.message);
            console.log(response)
            setEmail("")
            setName("")
            setPassword("")
            navigate("/login")         
        }catch(error){
            setMessage(error.response ? error.response.data.message : 'Network error')
        }finally {
            setLoading(false);
          }
          
    }

    return (<div>
        <div className="login-card">
            <Container className="d-flex justify-content-center mt-5">
                <Form className="w-50">
                    <div><h1 className="login">Register</h1></div>
                    {message && <p>{message}</p>}
                    <Form.Group controlId="formFirstName" className="mb-3">
                        <Form.Control type="text" placeholder="Enter Name" className="mx-auto" style={{ maxWidth: '300px' }} onChange={(event) => setName(event.target.value)} value={name} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Control type="email" placeholder="Enter email" className="mx-auto" style={{ maxWidth: '300px' }} onChange={(event) => setEmail(event.target.value)} value={email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mb-3">
                        <Form.Control type="password" placeholder="Password" className="mx-auto" style={{ maxWidth: '300px' }} onChange={(event) => setPassword(event.target.value)} value={password} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <p>Already have a Account?  <span className="span-register" onClick={() => navigate("/login")}>LOGIN</span></p>
                    </Form.Group>
                    <button id="but" type="submit" className="btn btn-primary mx-auto d-block" onClick={handleSubmit}>{loading ? 'Registering...' : 'Register'}</button>
                </Form>
            </Container>
        </div>
    </div>)
}

export default Register;

