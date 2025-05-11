import React from 'react';
// import { useState } from 'react';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    
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
        <ItemList 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete} 
        />
      ) : (
        <p style={{marginTop:'2rem'}}>Your list is empty!!</p>
      )}
    </main>
  )
}

export default Content
