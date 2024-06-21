// import logo from '../../public/logo-name.svg';
import logo from '/logo-name.svg';
import { useState } from 'react';
// import classes from './Header.module.css';
import { styled } from 'styled-components';

const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`;

export default function Header() {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setNow(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <HeaderContainer>
      <img src={logo} alt="img" />
      <span>Время сейчас: {now}</span>
    </HeaderContainer>
  );
}
