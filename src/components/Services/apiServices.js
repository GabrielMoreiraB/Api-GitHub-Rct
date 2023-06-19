import { get } from "./httpService";

const BACK_AND_URL = 'http://api.github.com/users/GabrielMoreiraB';

const BACK_AND_URL_PORTFOLIO = 'https://api.github.com/users/GabrielMoreiraB/repos?&per_page=10&page=1&sort=pushed&direction=asc}'

export async function apiGetUser() {
    
    const user = await get(BACK_AND_URL);
    /* console.log(user); */
    return user;
}


export async function apiGetPortfolio(){

    const portfolio = await get(BACK_AND_URL_PORTFOLIO);
    console.log(portfolio);

}



