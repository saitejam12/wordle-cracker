import { useState } from 'react';
import './App.css';
const dictionary = require('./dictionary_compact.json');

function App() {
  const [one, setOne] = useState();
  const regex = /(one)(two)(three)/g;
  const dict = JSON.parse(JSON.stringify(dictionary));
  const words = Object.keys(dict)
    .filter((word) => word.length === 5)
    .sort();

  console.log(words);

  return (
    <div className='App'>
      {words.map((word) => {
        return <div className=''>{word}</div>;
      })}
    </div>
  );
}

export default App;
