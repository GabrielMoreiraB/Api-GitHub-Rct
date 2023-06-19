import styled from 'styled-components';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import { UsuarioContext } from '../../Context/Usuario';


const StyledBox = styled.div `
flex: 0 0 40%; 
  padding: 1em;

  @media (max-width: 1115px) {
    flex: 0 0 90%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1em;
  margin:  0 2em;
  background: #101723;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
  0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
  0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
  0px 8px 17px rgba(0, 0, 0, 0.29),
  inset 0px 6px 8px rgba(255, 255, 255, 0.1),
  inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 20px;
  height: min-content;
  width:40%;
`

const Portfolio = () => {

    const { portifolio} = useContext(UsuarioContext);

    console.log(portifolio)

    return ( 
        <>
        {portifolio.map(item => <p>{item.name}</p>)}
        
        </>
     );
}
 
export default Portfolio;