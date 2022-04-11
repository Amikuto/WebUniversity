import React, {useState} from 'react';
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

const UserRegistrationFrom = ({create}) => {
    const [user, setUser] = useState({name: "", email: "", username: "", password: ""})

    function addNewUser(e) {
        e.preventDefault()
        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUserRegEmail">
                    {/*<Form.Label>Username</Form.Label>*/}
                    <Form.Control type="username" placeholder="Enter username"
                                  onChange={e => setUser({...user, username: e.target.value})}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUserRegPassword">
                    {/*<Form.Label>Password</Form.Label>*/}
                    <Form.Control type="password" placeholder="Password"
                                  onChange={e => setUser({...user, password: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserRegUsername">
                    {/*<Form.Label>Email</Form.Label>*/}
                    <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                        <FormControl placeholder="Email"
                                     onChange={e => setUser({...user, email: e.target.value})}/>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUserRegName">
                    {/*<Form.Label>First name</Form.Label>*/}
                    <Form.Control type="username" placeholder="Enter first name"
                                  onChange={e => setUser({...user, name: e.target.value})}/>
                </Form.Group>
                <Button variant="primary" onClick={addNewUser}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserRegistrationFrom;