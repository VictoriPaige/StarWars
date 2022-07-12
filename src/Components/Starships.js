import { useState, useEffect } from "react";
import { starWars } from "../Services/sw-api";
import StarshipCard from "./Starshipcard";

export default function GetAllStarships() {
const [cards, setCards]=useState([])

useEffect (async()=>{
const ship= await starWars()
// console.log(ship)
setCards(ship.data.results)
 }, [])
// console.log(cards)

return(
<div> 
{cards.map((card) => <StarshipCard name = {card.name}/>)}

</div>
    )}