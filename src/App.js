import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
import validar from './validacao_taac/validar';



function App() {
  const inputEl = useRef(null);

  const [validacoes, setValidacoes] = useState(null);

  const validarArquivo = (evt) => {
    console.log(evt.currentTarget.result);
    let retorno = validar(evt.currentTarget.result);

    console.log("Retorno validar", retorno);
    setValidacoes(retorno);
    console.log("Setei retorno", retorno)
  }

  console.log("validacoes", validacoes)

  return (
    <div className="App">
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

        <input type="file" accept=".yaml, .yml" ref={inputEl}/>
        <button type="button" onClick={() => {
          console.log(inputEl);
          let fileReader = new FileReader();
          fileReader.onload = validarArquivo;
          fileReader.readAsText(inputEl.current.files[0]);
        }}>Validar</button>

      <h3>Validações aqui</h3>
      {validacoes !== null && Array.isArray(validacoes) && <h3>TestSpec OK!</h3>}

      {Array.isArray(validacoes) && validacoes.length > 0 && 
        <ul>
          Validações:
          {validacoes.map(v => <li>{v}</li>)}
        </ul>
      }
      </header>
    </div>
  );
}

export default App;
