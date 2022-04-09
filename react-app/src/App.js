import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hooks from "./components/JS4.10_hooks/Hooks";
import './styles/App.css'

function App() {

  const [task, setTask] = useState(Hooks);

  return (
    <div>
      {/*<button onClick={setTask(Hooks)}/>*/}
      <Hooks/>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default App;
