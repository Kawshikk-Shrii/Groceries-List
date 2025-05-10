// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
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
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
