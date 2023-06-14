import { createContext, useEffect, useState } from 'react';
import { apiGetUser } from '../components/Services/apiServices';




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
        setPublicRepos(user.public_repos)
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
            publicRepos
            }}>
            {children}
        </UsuarioContext.Provider>
    );
};