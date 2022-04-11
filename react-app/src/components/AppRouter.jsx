import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Hooks from "../pages/Hooks";
import Error from "../pages/Error";
import Works from "../pages/Works";
import Music from "../pages/Music";
import Todo from "../pages/Todo";
import ConditionalRender from "../pages/ConditionalRender";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/"} element={<Navigate replace to="/home"/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/hooks"} element={<Hooks/>}/>
            <Route path={"/works"} element={<Works/>}/>
            <Route path={"/music"} element={<Music/>}/>
            <Route path={"/todo"} element={<Todo/>}/>
            <Route path={"/conditional-render"} element={<ConditionalRender/>}/>
            <Route path={"/error"} element={<Error/>}/>
            <Route path={"*"} element={<Navigate to ="/error" />}/>
        </Routes>
    );
};

export default AppRouter;