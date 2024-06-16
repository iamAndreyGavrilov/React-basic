import { useState } from 'react';
// import logo from '../../public/logo-name.svg';
import logo from '/logo-name.svg';

export default function Header() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setNow(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header>
      <img src={logo} alt="img" />
      <span>Время сейчас: {now}</span>
    </header>
  );
}
