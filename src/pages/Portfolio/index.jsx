import styled from 'styled-components';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import { UsuarioContext } from '../../Context/Usuario';
import trataData from '../../components/Services/trataData';
import { FaStar, FaRegStar } from "react-icons/fa";


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

const StyledContainerPort = styled.div`
  background-color: #434C7E;
  padding: 1em;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  justify-items: start;
  border-radius: 10px;
  display: grid;
  grid-template-columns:50% 50%  ;
  grid-template-rows:auto auto auto ;
`

const StyledSpan = styled.span `
    color: #101723;
    padding: 2px 4px;
    border: 1px solid #434C7E;
    font-weight: 500;
`

const StyledLinguage = styled.h4`
  color: #662400;
`
const StyledStar = styled.span`
display: flex;
justify-self: end;
`


const Portfolio = () => {

    const { portifolio} = useContext(UsuarioContext);

    console.log(portifolio)

    return ( 
        <StyledBox>

          {portifolio.map((item, index) => 
            <StyledContainerPort key={index}>
              <h3>{item.name}</h3>
              <p>criado em: <StyledSpan>{trataData(item.created_at)}</StyledSpan></p>
              <StyledLinguage>{item.language}</StyledLinguage>
              <StyledStar> <FaStar/> </StyledStar>
              {console.log(item.languages_url)}
            </StyledContainerPort>
            
            )}  

        
        </StyledBox>
     );
}
 
export default Portfolio;