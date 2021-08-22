import { useColonCards } from "../../contexts/ColonCards";
import { TimeConverter } from "../../utils/general";
import "./styles.scss"
const Timer = () => {
  const { time } = useColonCards();
  return <div className="timer">{TimeConverter(time)}</div>;
};
export default Timer;
