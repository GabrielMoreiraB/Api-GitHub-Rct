import styled from 'styled-components';
import { useContext } from 'react';
import { UsuarioContext } from '../../context/Usuario';
import { useNavigate } from 'react-router-dom';


const User = () => {
    const { usuario } = useContext(UsuarioContext);
    return ( 
        <div>Usuario é: { usuario}</div>

        
     );
}
 
export default User;