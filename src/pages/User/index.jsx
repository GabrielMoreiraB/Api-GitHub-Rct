import styled from 'styled-components';
import { useContext } from 'react';
import { UsuarioContext } from '../../context/Usuario';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';



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
        <div>Usuario é: { usuario}</div>

        
     );
}
 
export default User;