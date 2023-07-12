import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof count);
    // const parse = parseInt(count);
    // console.log(typeof parse);
    const newArr = data.slice(0, count);
    setText(newArr);
  };
  return (
    <main>
      <h1 className="title">tired of boring lorem ipsum?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numberParagraphs">paragraphs: </label>
        <input
          type="number"
          id="numberParagraphs"
          min={1}
          max={9}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      {text.map((textItem) => {
        const id = nanoid();
        return (
          <p className="text" key={id}>
            {textItem}
          </p>
        );
      })}
    </main>
  );
};
export default App;
