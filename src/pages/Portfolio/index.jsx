import styled from 'styled-components';
import { useContext, useState } from 'react';
import Loading from '../../components/Loading';
import { UsuarioContext } from '../../Context/Usuario';
import trataData from '../../components/Services/trataData';
import { FaStar, FaRegStar, FaRegArrowAltCircleDown } from "react-icons/fa";
import { motion } from 'framer-motion';



const StyledBox = styled.div `
  display: flex;
  gap: 1.3em;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 3em ;
  margin:  0 auto;
  background: #101723;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
  0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
  0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
  0px 8px 17px rgba(0, 0, 0, 0.29),
  inset 0px 6px 8px rgba(255, 255, 255, 0.1),
  inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  width:100%;
  max-width: 800px;
  height: 70vh;
  overflow: auto;
`

const StyledContainerPort = styled(motion.div)`
  background-color: #434C7E;
  padding: 1em;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  justify-items: start;
  border-radius: 10px;
  display: grid;
  grid-template-columns:50% 50%  ;
  grid-template-rows:auto auto;
`

const StyledSpan = styled.span `
    color: #101723;
    padding: 2px 4px;
    border: 1px solid #434C7E;
    font-weight: 500;
`

const StyledLinguage = styled.h4`
  color: #a0fa97;
`
const StyledStar = styled.span`
display: flex;
justify-self: end;
`

const StyledButton = styled.button`
  background-color: #434C7E;
  color: white;
  padding: 0.5em 1em;
  font-size: 20px;
  align-items: center;
  justify-content: space-evenly;
  justify-items: start;
  border-radius: 10px;
`


const Portfolio = () => {

    const { portifolio,
            setPagina,
            pagina,
            favoritos, 
            setFavoritos,
            MotionContainer
            } = useContext(UsuarioContext);    
    
    const [starredItems, setStarredItems] = useState([]);

    const handleToggle = (item, index) => {
      setStarredItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[index] = !updatedItems[index];
        return updatedItems;
      });
      const posicaoItem = favoritos.indexOf(item);
        let array = [...favoritos]
        if(posicaoItem === -1) {
          array.push(item);
        } else { 
          array.splice(index, 1);
        }
        setFavoritos(array);
    };




    return (
      <StyledBox >
        {portifolio.map((item, index) => {
          return (
            <StyledContainerPort 
              key={index}
              variants={MotionContainer}
              initial={"onInitial"}
              animate={"offAnimation"}
              transition={{
                when: "beforeChildren",
                staggerChildren: 0.2,

            }}
            >
               <a target='_blank' href={item.html_url}><h3>{item.name}</h3></a>
              <p>criado em: <StyledSpan>{trataData(item.created_at)}</StyledSpan></p>
              <StyledLinguage>{item.language}</StyledLinguage>
              <StyledStar >
                 {starredItems[index] ? (
                    <FaStar onClick={() => handleToggle(item, index)} />
                  ) : (
                    <FaRegStar onClick={() => handleToggle(item, index)} />
                  )}
              </StyledStar>
            </StyledContainerPort>
          );
        })}
        <StyledButton onClick={()=> setPagina(pagina + 1)}><FaRegArrowAltCircleDown/></StyledButton>
      </StyledBox>
    );
}
 
export default Portfolio;