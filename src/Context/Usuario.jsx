import { createContext, useEffect, useState } from 'react';
import { apiGetPortfolio, apiGetUser } from '../components/Services/apiServices';
import trataData from '../components/Services/trataData';



export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState('');
    const [imgUser, setImgUser] = useState('');
    const [name, setName] = useState('');
    const [blog, setBlog] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [publicRepos, setPublicRepos] = useState('');
    const [data, setData] = useState('');

    const [portifolio, setPortifolio] = useState([]);
    const [pagina, setPagina] = useState(1);

    const[favoritos, setFavoritos] = useState([]);
    const [starredItems, setStarredItems] = useState([]);


useEffect(() => {
    async function getUser(usuario) {
        let user = await apiGetUser(usuario);
        setImgUser(user.avatar_url);
        setName(user.name);
        setBlog(user.blog);
        setLocation(user.location);
        setBio(user.bio);
        setFollowers(user.followers);
        setFollowing(user.following);
        setPublicRepos(user.public_repos);
        setData(trataData(user.created_at))
    }
    getUser(usuario)
},[usuario])

useEffect( ()=> {
    async function getPortfolio(usuario, pagina) {
        let port = await apiGetPortfolio(usuario, pagina)
        
        setPortifolio((preventPortifolio)=> [...preventPortifolio, ...port]);
    }
    getPortfolio(usuario, pagina )
},[usuario, pagina])



    const MotionContainer = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
  };
  const MotionForm = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: { x: 0, opacity: 1 },
  };

    return (
        <UsuarioContext.Provider value={
            { 
            usuario, 
            setUsuario,
            imgUser,
            name, 
            blog, 
            location,
            bio,
            followers,
            following,
            publicRepos,
            data,
            portifolio,
            pagina,
            setPagina,
            favoritos, 
            setFavoritos,
            starredItems, 
            setStarredItems,
            MotionContainer,
            MotionForm,
            }}>
            {children}
        </UsuarioContext.Provider>
    );
};