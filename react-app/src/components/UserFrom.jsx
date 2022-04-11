import React, {useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";

const UserFrom = ({create}) => {
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
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={addNewUser}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserFrom;