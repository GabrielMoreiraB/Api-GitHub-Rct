import styled from 'styled-components';
import { useContext } from 'react';
import Loading from '../../components/Loading';
import { UsuarioContext } from '../../Context/Usuario';


const StylesContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: .5em;
    @media (max-width: 1115px) {
    padding: 0 ;
  }
  
`
const StyledFlex = styled.div `
    display: flex;
    align-items: center;
    text-align: center;

`
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
  height: 300px;
  width:45%;
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

const StyledSpanColor = styled.span`
    color: #434C7E;
`

const StyledSpace = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-evenly;

`

const User = () => {

    const { usuario,
            name, 
            blog, 
            location,
            bio,
            followers,
            following,
            publicRepos,
            data} = useContext(UsuarioContext);

            
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
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=GabrielMoreiraB&stroke=2ea043&background=101723&ring=3382ed&fire=3382ed&currStreakNum=0bd967&currStreakLabel=3382ed&sideNums=0bd967&sideLabels=3382ed&dates=0bd967&hide_border=true" />
            </StyledBox>
           

            <StyledBox>
                <StyledFlex>
                    <h2>Perfil <StyledSpanColor>{usuario}</StyledSpanColor></h2>
                    <StyledImg src="https://octodex.github.com/images/inspectocat.jpg" alt="" />
                </StyledFlex>
                <StyledFlex>
                    <p>{bio}</p>
                </StyledFlex>
                <p>Membro desde <StyledSpanColor>{data}</StyledSpanColor></p>
                {blog !== '' && <a href={blog} target="_blank"> Blog pessoal</a>}
                <StyledSpace>
                <h2>Número de Repositorios</h2> 
                <h3>{publicRepos}</h3>
                </StyledSpace>
                
            </StyledBox>

            <StyledBox>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GabrielMoreiraB&theme=transparent&hide_border=true"/>
            </StyledBox>

        </StylesContainer>

        
     );
}
 
export default User;