import { createContext, useEffect, useState } from 'react';
import { apiGetUser } from '../components/Services/apiServices';
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

useEffect(() => {
    async function getUser() {
        let user = await apiGetUser();
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
    getUser()
},[])


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
            data
            }}>
            {children}
        </UsuarioContext.Provider>
    );
};