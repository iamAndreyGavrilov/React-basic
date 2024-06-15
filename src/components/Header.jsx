// import logo from '../../public/logo-name.svg';
import logo from '/logo-name.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="img" />
      <span>Время сейчас: {new Date().toLocaleTimeString()}</span>
    </header>
  );
}
