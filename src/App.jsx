import Header from './components/Header.jsx';
import WayToTeach from './components/WayToTeach.jsx';
import Button from './components/Button/Button.tsx';
import { ways, differences } from './data.js';
import { useState } from 'react';

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Main</h3>
          <ul>
            {ways.map((way, index) => (
              <WayToTeach key={index} {...way} />
            ))}
          </ul>
        </section>

        <section>
          <h3>Differences</h3>
          <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>
            way
          </Button>
          <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>
            easy
          </Button>
          <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>
            program
          </Button>

          {contentType ? <p>{differences[contentType]}</p> : <div>Нажми кнопку</div>}
        </section>
      </main>
    </div>
  );
}
