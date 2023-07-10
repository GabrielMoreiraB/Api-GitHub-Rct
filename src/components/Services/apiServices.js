import { get } from "./httpService";


export async function apiGetUser(usuario) {
    
    const user = await get(`https://api.github.com/users/${usuario}`);
    /* console.log(user); */
    return user;
}


export async function apiGetPortfolio(usuario, pagina){

    const portfolio = await get(`https://api.github.com/users/${usuario}/repos?&per_page=10&page=${pagina}&sort=pushed&direction=asc}`);
    /* console.log(portfolio);
 */
return portfolio;
}



