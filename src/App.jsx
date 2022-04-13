import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';

function App() {

  // const arr = [1, 2, 3];

  // const a = 4;

  // const nuevoArr = [...arr, a, 5];

  // console.log(nuevoArr);

  // const comision = '12345';

  // const profe = {
  //   nombre: 'Diego',
  //   apellido: 'Medina',
  //   ['comision-' + comision]: 'todos unos genios'
  // }

  // console.log(profe);

  // const { b: val } = { a: 3 }

  // console.log(val);

  // const [a = 1, b = 2, c = 3, d = 4] = [1, 2, 3];

  // console.log(d);

  // const a = 1;
  // const b = 2;
  // const c = 3;


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
