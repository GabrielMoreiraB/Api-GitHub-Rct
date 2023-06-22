import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { UsuarioContext } from './Context/Usuario';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUserAstronaut, FaGithub, FaGrinStars } from "react-icons/fa"
import { RiGitRepositoryLine } from "react-icons/ri"

const StyledImg = styled.img`
width: 80px;
border-radius: 50%;
margin-bottom: 1em;
`;

const StyledButton = styled.button`
background-color: #0F1623;
margin: .5em;
border-radius: 50%;
padding: .6em;
font-size: 1.8em;
color:#ffffff
`;

const StyledContainer = styled.div `
  display: grid;
  grid-template-columns:100px auto  ;
  grid-template-rows:auto 1fr  ;
`

const StyledContainerVert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 1/3;
  grid-column: 1/2;
  width: 100px;
  height: 93vh;
  background-color: #434C7E;
  padding-top: 2em;
  border-radius: 5px;
`

const StyledContainerHor = styled.div`
  display: flex;
  justify-content: end;
  grid-column: 2/3;
  grid-row: 1/2;
  max-height: 100px
  
`

const StyledContainerUser = styled.div `
  display: flex;
  grid-column: 2/3;
  grid-row: 2/3;
  margin: 1.5em;
`

function App() {
  const { imgUser } = useContext(UsuarioContext);

  const navigate = useNavigate()

  function turnHome(e){
    e.preventDefault();
    return navigate('/')
  }
  function turnUser(e){
    e.preventDefault();
    return navigate('/user')
  }

  function turnPortfolio(e){
    e.preventDefault();
    return navigate('/portfolio')
  }

  function turnFavoritos(e){
    e.preventDefault();
    return navigate('/favoritos')
  }


  return (

      <StyledContainer>
        <StyledContainerHor>
          <StyledButton onClick={(e)=>turnHome(e)}><FaGithub/></StyledButton>
          <StyledButton onClick={(e)=> turnFavoritos(e)}><FaGrinStars/></StyledButton>
        </StyledContainerHor>

        <StyledContainerVert>
          <StyledImg src={imgUser} alt="" />
          <StyledButton onClick={(e)=>turnUser(e)}><FaUserAstronaut/></StyledButton>
          <StyledButton onClick={(e)=>turnPortfolio(e)}><RiGitRepositoryLine/></StyledButton>
        </StyledContainerVert>

        <StyledContainerUser>
          <Outlet />
        </StyledContainerUser>
      </StyledContainer>

  )
}

export default App
