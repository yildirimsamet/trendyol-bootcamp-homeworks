import { ToastContainer } from "react-toastify";
import { useColonCards } from "./contexts/ColonCards";

import Board from "./components/Board";
import TopSection from "./components/TopSection";
import Congrats from "./components/Congrats";

import "react-toastify/dist/ReactToastify.css";
import "./styles/main.scss";
import StartGame from "./components/StartGame";

const App = () => {
  const { gameIsFinished , isGameStarted } = useColonCards();
  return (
    <div className="App">
      <TopSection />
      <Board />
      {!isGameStarted&& <StartGame/>}
      {gameIsFinished && <Congrats />}
      <ToastContainer />
    </div>
  );
};

export default App;
