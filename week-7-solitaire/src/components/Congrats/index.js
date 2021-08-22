import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import "./styles.scss";
import { useColonCards } from "../../contexts/ColonCards";
import { TimeConverter } from "../../utils/general";
const Congrats = () => {
  const animationRef = useRef();
  const { gameIsFinished, restartGame, time } = useColonCards();
  useEffect(() => {
    if (gameIsFinished) {
      lottie.loadAnimation({
        name: "confetti",
        container: animationRef.current,
        loop: false,
        autoplay: true,
        renderer: "svg",
        animationData: require("../../assets/animations/confetti.json"),
      });
    }
  }, [gameIsFinished]);

  return (
    <div ref={animationRef} className="congrats">
      <h3 className="congratsTitle">Oyunu Kazandınız</h3>
      <h4 className="congratsTime">Bitirme Süreniz <br /> {TimeConverter(time)}</h4>
      <button onClick={restartGame} className="congratsButton">
        Tekrar Oyna
      </button>
    </div>
  );
};
export default Congrats;
