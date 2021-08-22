import Card from "../../Card";
import "./styles.scss";
const FinishedDecks = ({ finishedDecks }) => {
  return (
    <div className="finishedDecks">
      {new Array(8).fill(1).map((_, index) => {
        if (index < finishedDecks) {
          return (
            <Card
              key={index}
              suit="♠"
              value="13"
              draggable={false}
              className="finishDeckCard"
            />
          );
        } else {
          return <div key={index} className="emptyCardPlaceHolder"></div>;
        }
      })}
    </div>
  );
};
export default FinishedDecks;
