import { useColonCards } from "../../contexts/ColonCards";
import Timer from "../Timer";
import FinishedDecks from "./FinishedDecks";
import OtherCards from "./OtherCards";
import "./styles.scss";
const TopSection = () => {
  const { otherCards, distributeCards, finishedDecks } = useColonCards();
  return (
    <div className="topSection">
      <Timer />
      <OtherCards distributeCards={distributeCards} otherCards={otherCards} />
      <FinishedDecks finishedDecks={finishedDecks} />
    </div>
  );
};
export default TopSection;
