import { useEffect } from "react";
import { get } from "./httpService";

const BACK_AND_URL = 'http://api.github.com/users/GabrielMoreiraB';


export async function apiGetUser() {
    
    const user = await get(BACK_AND_URL);
    /* console.log(user); */
    return user;
}