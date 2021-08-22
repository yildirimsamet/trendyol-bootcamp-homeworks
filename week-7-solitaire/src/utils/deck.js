const SUITS=["♠","♠","♠","♠","♠","♠","♠","♠"]
const VALUES=["1","2","3","4","5","6","7","8","9","10","11","12","13"]
export default class Deck {
    constructor(){
       this.cards=newDeck()
    }
}
class Card {
    constructor(id,suit,value){
        this.suit=suit;
        this.value=value;
        this.id=id
        this.isDown=false;
    }
}
const newDeck = () =>{
    let id=-1;
    return SUITS.flatMap((suit)=>{
        return VALUES.map((value)=>{
            id++
            return new Card(id,suit,value)

        })
    })
}