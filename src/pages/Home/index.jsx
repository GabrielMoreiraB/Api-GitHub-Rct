import styled from 'styled-components';
import { useContext } from 'react';
import { UsuarioContext } from '../../Context/Usuario';
import { useNavigate } from 'react-router-dom';
import {FaSearch } from "react-icons/fa"
import Loading from '../../components/Loading';
import { motion } from 'framer-motion';

const StyledContainer = styled(motion.div)`
background: #101723;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
  0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
  0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
  0px 8px 17px rgba(0, 0, 0, 0.29),
  inset 0px 6px 8px rgba(255, 255, 255, 0.1),
  inset 0px -4px 5px rgba(0, 0, 0, 0.22);
border-radius: 48px;
padding: 1em 2em;
margin: 30vh auto;
place-items: center;
display: flex;
max-width: 800px;
`;
const StyledTitle = styled(motion.h1)`
color: #6a9dff;
`;
const Styledgit = styled.span`
color: #9862fe;
`;
const StyledInput = styled(motion.input)`
padding: 4px 8px;
font-size: 24px;
background-color: #434c7e;
border: none;
border-radius: 5px;
&&::selection {
  border: none;
}
`;
const StyledImg = styled.img`
width: 200px;
`;
const StyledButton = styled.button`
background-color: transparent;
color: white;
`;

const Home = () => {
  const { setUsuario,
          MotionContainer,
          MotionForm } = useContext(UsuarioContext);

  const navigate = useNavigate()

  function formUsuarioSubmit(e) {
    e.preventDefault();
    setUsuario(e.target.value);
    return navigate('/user')
  }

  return (
    <StyledContainer
        variants={MotionContainer}
        initial={"onInitial"}
        animate={"offAnimation"}
        transition={{
          when: "beforeChildren",
          staggerChildren: 2,
          type: "just",
        }}
    >
      <div>
      <label htmlFor="usuario">
        <StyledTitle >
          Insira um usuário válido do
          <Styledgit> GitHub</Styledgit>
        </StyledTitle>
      </label>
      <StyledInput 
      variants={MotionForm}
      type="text" 
      name="usuario" 
      id="usuario" 
      onBlur={(e) => formUsuarioSubmit(e)}
      />
      <StyledButton>
        <FaSearch/>
      </StyledButton>
      </div>
      <StyledImg
        src="https://octodex.github.com/images/spidertocat.png"
        alt=""
      />
      
    </StyledContainer>
    /* aqui vamos utilizar o usenavigate, ao clicar botão de validação, a ação onclick vai utilizar tambem da seguinte logica:
        const navigate = usenavigate();
        const funcaodoonclick = () =>{
            setLogin(.....)
            return navigate("user")
        }
        
        */
  );
};

export default Home;
