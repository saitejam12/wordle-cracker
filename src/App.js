import { useState, useEffect } from 'react';
import './App.css';
const dictionary = require('./dictionary_compact.json');

function App() {
  const [filtered, setFiltered] = useState([]);
  const dict = JSON.parse(JSON.stringify(dictionary));
  const words = Object.keys(dict)
    .filter((word) => word.length === 5)
    .sort();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const pos = name.split('');
    const temp = filtered.filter((word) => word.indexOf(value) === pos[1] - 1);
    setFiltered(temp);
  };

  useEffect(() => {
    setFiltered(words);
  }, []);

  return (
    <div className='App'>
      <div className='inputs'>
        <div className='greens'>
          <input type='text' onChange={(e) => handleChange(e)} name='g1' />
          <input type='text' onChange={(e) => handleChange(e)} name='g2' />
          <input type='text' onChange={(e) => handleChange(e)} name='g3' />
          <input type='text' onChange={(e) => handleChange(e)} name='g4' />
          <input type='text' onChange={(e) => handleChange(e)} name='g5' />
        </div>
        <div className='yellows'>
          <input type='text' onChange={(e) => handleChange(e)} name='y1' />
          <input type='text' onChange={(e) => handleChange(e)} name='y2' />
          <input type='text' onChange={(e) => handleChange(e)} name='y3' />
          <input type='text' onChange={(e) => handleChange(e)} name='y4' />
          <input type='text' onChange={(e) => handleChange(e)} name='y5' />
        </div>
        <div className='greys'></div>
      </div>
      <div className='wordList'>
        {filtered.map((word, index) => {
          return (
            <div className='' key={index}>
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
