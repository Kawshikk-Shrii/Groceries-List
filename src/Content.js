import React from 'react';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
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
    // const [count, setCount] = useState(0);
    
    // const handlename = () => {
    //     const names = ['cherry','doraemon','shinchan'];
    //     const int = Math.floor(Math.random()*3);
    //     setName(names[int]);
    //   }
    //   const handleclick = () => {
    //     setCount(count + 1);
    //     console.log(count);
    //     // setCount(count + 1);
    //   }    
    //   const handleclick2 = () => {
    //     // alert(`${name} was clicked`);
    //     console.log(count);
    //   }    
    //   const handleclick3 = (e) => {
    //     console.log(e.target.innerText);
    //   }
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
    <main>
      {/* <p>
        Hello {name}!!!
      </p>
      <br></br>
      <button onClick={handlename}>Change name!!</button>
      <br></br>
      <button onClick={handleclick}>Click it!!</button>
      <br></br>
      <button onClick = {handleclick2}>Click me. It shows name</button>
      <br></br>
      <button onClick = {(e) => handleclick3(e)}>Click it!! to show the innerText</button> */}
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input 
                type='checkbox'
                onChange = {() => handleCheck(item.id)}
                checked = {item.checked}
              />
              <label
                style = { item.checked ? {textDecoration: 'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
              >{item.item}</label>
              <FaTrashAlt 
                onClick = {() => handleDelete(item.id)}
                role='button' 
                tabIndex = '0' 
              />
            </li>
          ))}
        </ul>) 
      : (
        <p style={{
          marginTop:'2rem'
        }}>Your list is empty!!</p>
      )}
    </main>
  )
}

export default Content
