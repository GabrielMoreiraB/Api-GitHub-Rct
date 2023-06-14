import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { UsuarioContext } from './context/Usuario';
import styled from 'styled-components';

const StyledImg = styled.img`
width: 90px;
border-radius: 50%;
`;

function App() {
  const { imgUser } = useContext(UsuarioContext);


  return (
    <>
      
      <Navbar/>
      <StyledImg src={imgUser} alt="" />
      <h2>react router</h2>
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default App
