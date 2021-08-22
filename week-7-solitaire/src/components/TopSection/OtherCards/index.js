import './styles.scss'
const OtherCards = ({otherCards,distributeCards})=>{
    return (
        <div onClick={()=>distributeCards()} className="otherCards">
            <img src="/images/cardBack.png"/>
            <span>{otherCards?.length}</span>
        </div>
    )
}
export default OtherCards;