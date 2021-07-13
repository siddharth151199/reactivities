import react from "react";
import { Duck } from "./demo";

interface Props{
    duck: Duck
    pp: string
}

export default function DuckItem({duck,pp}: Props){
    return(
        <div>
       <div key={duck.name}>
          <h1>{duck.name}</h1>
        <button onClick={() =>  duck.makeSound(pp + " quak")} >sound</button>
        </div>
        </div>
    )
}