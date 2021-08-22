import { useColonCards } from "../../contexts/ColonCards";
import Colon from "../Colon";
import './styles.scss'
const Board=()=>{
    const {colonCards}=useColonCards()
    return(
        <div className="boardWrapper">
           {colonCards.map(colonCard=>{
               return <Colon key={colonCard.colonId} id={colonCard.colonId} cards={colonCard.cards}/>
           })}
        </div>
    )
} 
export default Board;