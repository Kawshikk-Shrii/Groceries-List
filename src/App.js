// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
    const [newItem, setnewItem] = useState('');
    const [search, setSearch] = useState('');

    const setandsaveitems = (newItems) => {
      setItems(newItems);
      localStorage.setItem('shoppinglist',JSON.stringify(newItems));
    }

    const additem = (item) => {
      const id = items.length ? items[items.length-1].id+1 : 1;
      const mynewitem = {id, checked:false, item};
      const listitems = [...items, mynewitem];
      setandsaveitems(listitems);
    }
    const handleCheck = (id) => {
      const listitems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setandsaveitems(listitems);
    }

    const handleDelete = (id) => {
      const listitems = items.filter((item) => item.id !== id);   
      setandsaveitems(listitems);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      // console.log(newItem);
      additem(newItem);
      setnewItem('');
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
      <AddItem
        newItem = { newItem }
        setnewItem = { setnewItem }
        handleSubmit = { handleSubmit }/>
      <SearchItem
        search = {search}
        setSearch = { setSearch }
      />
      <Content 
        items = {items.filter(item => ((item.item).toLowerCase()).includes((search).toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer length = { items.length }/>
    </div>
  );
}

export default App;
