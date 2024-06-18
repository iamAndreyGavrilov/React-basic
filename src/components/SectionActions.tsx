import Button from './Button/Button';
import { differences } from '../data';

import { useState } from 'react';

export default function SectionActions() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
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
  );
}
