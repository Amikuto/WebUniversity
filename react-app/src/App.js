import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import {BrowserRouter,} from "react-router-dom";
import MyNavbar from "./components/UI/Navabar/MyNavbar";
import AppRouter from "./components/AppRouter";

function App() {

    return (
        <BrowserRouter>
            <MyNavbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
