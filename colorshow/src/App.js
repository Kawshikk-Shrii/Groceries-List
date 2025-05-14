import logo from './logo.svg';
import './App.css';
import ColorName from './colorname';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const stylecolor = {
    backgroundColor: color,
    type: 'text',
    placeholder: 'Empty value',
    height: '50px',
    width: '100px',
    border: '3px solid black',
    marginTop: '10px',
    boxshadow: '5px'
  };

  return (
    <div>
      <p style={{ color: color || 'black' }} >
        You typed: {color || 'No color yet'}
      </p>

      <div style={stylecolor} />

      <ColorName 
        color={color} 
        setColor={setColor} 
      />
    </div>
  );
}

export default App;