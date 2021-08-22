import { useEffect, useState } from "react";
import { useColonCards } from "../../contexts/ColonCards";
import "./styles.scss";
const StartGame = () => {
  const [loading, setLoading] = useState(0);
  const {setIsGameStarted}=useColonCards();
  let loadingInterval;
  useEffect(() => {
    if (loading < 100) {
      loadingInterval = setInterval(() => {
        setLoading((loading) => loading + 10);
        if (loading >= 100) {
          clearInterval(loadingInterval);
        }
      }, 300);
    }
    return () => clearInterval(loadingInterval);
  }, [loading]);
  return (
    <div className="startGame">
      {loading < 100 ? (
        <>
          <h3 className="startGameTitle">
            Devam etmeden ateşinizi ölçmem gerek.
          </h3>
          <img src="/images/eren1.jpg" />
          <h4 className="startGameSubTitle">Ateş ölçülüyor</h4>
          <div className="fakeLoading">
            <span className="loadingText">{loading + "%"}</span>
            <span
              style={{ width: `${loading}%` }}
              className="loadingBar"
            ></span>
          </div>
        </>
      ) : (
        <>
            <h3 className="startGameTitle">Yolun Açık Olsun</h3>
            <img src="/images/eren2.jpg" />
            <button className="startGameButton" onClick={()=>setIsGameStarted(true)} >Oyunu Başlat</button>
        </>
      )}
    </div>
  );
};
export default StartGame;
