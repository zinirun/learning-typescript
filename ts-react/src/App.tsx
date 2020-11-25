import React from 'react';
import Greetings from './Greetings'
import Counter from './Counter'

function App() {
  const onClick = (name: string) => {
    console.log(name);
  }
  return (
    <>
    <Greetings name="리액트" onClick={onClick} />
    <Counter />
    </>
  );
}

export default App;
