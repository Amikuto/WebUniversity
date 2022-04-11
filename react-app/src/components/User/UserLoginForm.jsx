import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import UserRegistrationFrom from "./UserRegistrationFrom";
import classes from "./UserLoginForm.module.css"

const UserLoginForm = ({create, loginF}) => {

    const [user, setUser] = useState({username: "", password: ""})

    function logins(e) {
        e.preventDefault()
        loginF(user)
    }

    return (
        <div>
            <div className={classes.regLogin}>
                <h1 className={classes.h1}>Войдите на платформу!</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                        {/*<Form.Label>Username</Form.Label>*/}
                        <Form.Control type="username" placeholder="Enter username"
                                      onChange={e => setUser({...user, username: e.target.value})}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLoginPassword">
                        {/*<Form.Label>Password</Form.Label>*/}
                        <Form.Control type="password" placeholder="Password"
                                      onChange={e => setUser({...user, password: e.target.value})}/>
                    </Form.Group>
                    <Button variant="primary" onClick={logins}>
                        Войти
                    </Button>
                </Form>
            </div>
            <div className={classes.regLogin}>
                <h1 className={classes.h1}>Или зарегестрируйтесь!</h1>
                <UserRegistrationFrom create={create}/>
            </div>
        </div>
    );
};

export default UserLoginForm;