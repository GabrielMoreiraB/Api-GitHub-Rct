import { get } from "./httpService";

const BACK_AND_URL = 'http://api.github.com/users/GabrielMoreiraB';


export async function apiGetUser() {
    
    const user = await get(BACK_AND_URL);
    /* console.log(user); */
    return user;
}


export async function apiGetPortfolio(pagina){

    const portfolio = await get(`https://api.github.com/users/GabrielMoreiraB/repos?&per_page=10&page=${pagina}&sort=pushed&direction=asc}`);
    /* console.log(portfolio);
 */
return portfolio;
}



