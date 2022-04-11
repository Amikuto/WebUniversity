import React, {useState} from 'react';
import MyButton from "../components/UI/button/MyButton";
import {Button, Form} from "react-bootstrap";
import UserRegistrationFrom from "../components/User/UserRegistrationFrom";
import UserLoginForm from "../components/User/UserLoginForm";

const ConditionalRender = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Damir",
            email: "damir@mail.com",
            username: "ami",
            password: 123
        },
        {
            id: 2,
            name: "Masha",
            email: "masha@mail.com",
            username: "mash",
            password: 123
        },
    ])

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const addNewUser = (newUser) => {
        setUsers([...users, newUser])
    }

    function isUserExist(givenUser) {
        const user = users.find(element => element.username === givenUser.username)
        return user !== null && user.password === givenUser.password;

    }

    const login = (user) => {
        if (isUserExist(user)) {
            setIsLoggedIn(true)
        }
    }


    return (
        <div id={"conditional-page"} style={{textAlign: "center", width: "600px", height: "1200px"}}>
            <div >
                The user is <b>{isLoggedIn?'currently':'not'}</b> logged in.
            </div>
            <div>
                {isLoggedIn
                    ?
                    <div>
                        <MyButton
                            onClick={() => setIsLoggedIn(false)}>LogOut</MyButton>
                    </div>
                    :
                    <div>
                        <MyButton
                            onClick={() => setIsLoggedIn(true)}>LogIn</MyButton>
                        {/*<UserRegistrationFrom create={addNewUser}/>*/}
                        <UserLoginForm create={addNewUser} login={login}/>
                    </div>
                }
            </div>
        </div>
    );
};

export default ConditionalRender;