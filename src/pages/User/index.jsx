import styled from 'styled-components';
import { useContext } from 'react';
import { UsuarioContext } from '../../context/Usuario';
import Loading from '../../components/Loading';


const StylesContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
const StyledFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;

`
const StyledBox = styled.div `
flex: 0 0 40%; 
  padding: 10px;

  @media (max-width: 768px) {
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

const StyledSpan = styled.span `
    background-color: #ffffff;
    color: #101723;
    padding: 2px 4px;
    border: 1px solid #434C7E;
`
const StyledImg = styled.img`
width: 80px;
border-radius: 50%;
margin: 0 2em;
`;

const User = () => {

    const { usuario,
            imgUser,
            name, 
            blog, 
            location,
            bio,
            followers,
            following,
            publicRepos } = useContext(UsuarioContext);

    return ( 
        <StylesContainer>
            <StyledBox>
                <div>
                    <h2>{name}</h2> 
                    <p>{location}</p>
                    <h3><StyledSpan>{followers}</StyledSpan>  followers  |  <StyledSpan>{following}</StyledSpan> following</h3>
                </div>
            </StyledBox>
            
            <StyledBox>
                <h2>Número de Repositorios</h2> 
                <h3>{publicRepos}</h3>
            </StyledBox>

            <StyledBox>
                <StyledFlex>
                    <h2>Perfil</h2>
                    <StyledImg src={imgUser} alt="" />
                </StyledFlex>
                <p>{bio}</p>
                <a href={blog} target="_blank"> Blog pessoal</a>
            </StyledBox>
        </StylesContainer>

        
     );
}
 
export default User;