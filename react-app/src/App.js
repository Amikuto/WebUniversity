import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);
  const [fruit, setFruit] = useState('banana')
  const [todos, setTodos] = useState([{text: 'Learn more about hooks!'}])

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня!</button>
      <p>Ваш возраст: {age}</p>
      <input type={"number"} value={age} onInput={event => setAge(event.target.value)}/>
      <p>Fruit: {fruit}</p>
      <input value={fruit} onInput={e => setFruit(e.target.value)}/>
      <p>
        Todos: {todos.at(0).text}
      </p>
      <input onInput={e => setTodos([{text: e.target.value}])}/>
    </div>
  );
}

export default App;
