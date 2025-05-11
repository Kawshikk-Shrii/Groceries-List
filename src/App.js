// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Pizza"
        },
        {
            id: 2,
            checked: false,
            item: "Lay's"
        },
        {
            id: 3,
            checked: false,
            item: "Moong Dal"
        }
    ]);

    const handleCheck = (id) => {
      const listitems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(listitems); 
      localStorage.setItem('shoppinglist',JSON.stringify(listitems));
    }

    const handleDelete = (id) => {
      const listitems = items.filter((item) => item.id !== id);
      setItems(listitems);
      localStorage.setItem('shoppinglist',JSON.stringify(listitems));      
    }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to changes. 
          <p>Hello {handlename()}!!!</p>
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <h1>{"Hello Welcome, This is my first reactjs display..."}</h1>
        <button onClick={alert("Welcome to React!")}>click me!!!</button>
      </header>  */}
      <Header title="Grocery List"/>
      <Content 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = { items.length }/>
    </div>
  );
}

export default App;
