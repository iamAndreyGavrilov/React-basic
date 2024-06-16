import Header from './components/Header.jsx';
import WayToTeach from './components/WayToTeach.jsx';
import Button from './components/Button/Button.tsx';
import { ways, differences } from './data.js';
import { useState } from 'react';

export default function App() {
  const [content, setContent] = useState('Нажми на кнопку');

  function handleClick(type) {
    setContent(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Main</h3>
          <ul>
            {/*<WayToTeach {...ways[0]} />*/}
            {ways.map((way, index) => (
              <WayToTeach key={index} {...way} />
            ))}
          </ul>
        </section>

        <section>
          <h3>Differences</h3>
          <Button onClick={() => handleClick('way')}>way</Button>
          <Button onClick={() => handleClick('easy')}>easy</Button>
          <Button onClick={() => handleClick('program')}>program</Button>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  );
}
