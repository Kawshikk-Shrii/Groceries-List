import logo from './logo.svg';
import './App.css';
import ColorName from './colorname';
import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState('');
//   const stylecolor = {
//     backgroundColor: color,
//     height: '50px',
//     width: '100px',
//     border: '1px solid black',
//     marginTop: '10px'
//   };
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//       <ColorName style={stylecolor}
//       color = { color }
//       setColor = { setColor } />
//     </>
//   );
// }

// export default App;

function App() {
  const [color, setColor] = useState('');

  const stylecolor = {
    backgroundColor: color,
    height: '50px',
    width: '100px',
    border: '1px solid black',
    marginTop: '10px'
  };

  return (
    <div>
      <ColorName color={color} setColor={setColor} />

      <p style={{ color: color || 'black' }}>
        You typed: {color || 'No color yet'}
      </p>

      <div style={stylecolor} />
    </div>
  );
}

export default App;