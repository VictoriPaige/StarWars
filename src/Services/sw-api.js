import axios from "axios";



export async function starWars(){ 
    const response =  await axios.get('https://swapi.dev/api/starships/')
console.log(response)
return response

}