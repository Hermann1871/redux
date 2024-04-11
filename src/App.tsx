import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
// import './App.css';

function App() {

  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  useEffect(() => {
    console.log("Renderizzazioni:", count.current)
    count.current = count.current + 1;
  });

  console.log("RENDERIZZO")
  const inputRef = useRef<HTMLInputElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    // <div className="App"> 
    <>
      <input onKeyUp={(event) => event.key === 'Enter' && inputRef.current?.focus()} onChange={(event) => { console.log(event.target.value) }} placeholder="Inserisci testo 1" />
      <button onClick={() => inputRef.current?.focus()}>Click</button>
      <br />
      <input ref={inputRef} onKeyUp={(event) => event.key === 'Enter' && buttonRef.current?.click()} placeholder="Inserisci testo 2" />
      <input ref={inputRef} placeholder="Inserisci testo 3" />
      <input onChange={(e) => { setInputValue(e.target.value); console.log("onchange", e.target.value) }} ref={inputRef} placeholder="Inserisci testo 4" />

      <button ref={buttonRef} onClick={() => console.log("Bottone cliccato")}>Bottone</button>
      <h1>Render Count: {count.current}</h1>
    </>
    // </div>
  );
}

export default App;
