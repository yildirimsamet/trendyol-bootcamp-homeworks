import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ColonCardProvider } from "../../contexts/ColonCards";
import Deck from "../../utils/deck";
import { shuffleCards } from "../../utils/shuffle";

const WithColonCards = ({ children }) => {
  const [colonCards, setColonCards] = useState([
    { colonId: 0, cards: [] },
    { colonId: 1, cards: [] },
    { colonId: 2, cards: [] },
    { colonId: 3, cards: [] },
    { colonId: 4, cards: [] },
    { colonId: 5, cards: [] },
    { colonId: 6, cards: [] },
    { colonId: 7, cards: [] },
    { colonId: 8, cards: [] },
    { colonId: 9, cards: [] },
  ]);
  const [otherCards, setOtherCards] = useState([]);
  const [lastDraggedColon, setLastDraggedColon] = useState(null);
  const [lastDroppedColon, setLastDroppedColon] = useState(null);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [finishedDecks, setFinishedDecks] = useState(0);
  const [isGameStarted,setIsGameStarted]=useState(false);
  const [time,setTime]=useState(0)


  const restartGame = () => {
    setOtherCards([]);
    setTime(0)
    setLastDraggedColon(null);
    setLastDroppedColon(null);
    setGameIsFinished(false);
    setFinishedDecks(0);
    startGame();
  };

  const startGame = () => {
    let deck = new Deck();
    deck.cards = shuffleCards(deck.cards);

    //Map dönebilmek için 10 elemanlı bir array yaratır (10 kolon ihtiyacımız var)
    let colonCreatorArr = new Array(10);
    colonCreatorArr.fill(1);

    const INITIAL_COLONS = colonCreatorArr.map((_, index) => {
      //colonumuz ilk 4 kolondan biriyse 6 kart degilse 5 kart
      if (index <= 3) {
        return {
          colonId: index,
          cards: [
            ...deck.cards.splice(0, 6).map((card, index) => {
              if (index <= 4) {
                //6 kartlı kolonda 5. karta kadar hepsi kapalı dön
                return { ...card, isDown: true };
              } else {
                return { ...card };
              }
            }),
          ],
        };
      } else {
        return {
          colonId: index,
          cards: [
            ...deck.cards.splice(0, 5).map((card, index) => {
              if (index <= 3) {
                //5 kartlı kolonda 4. karta kadar hepsi kapalı dön
                return { ...card, isDown: true };
              } else {
                return { ...card };
              }
            }),
          ],
        };
      }
    });


    setColonCards(INITIAL_COLONS);

    //Dagıtılacak diger 5 deste
    let tempOtherCards = [];
    for (let i = 0; i < deck.cards.length; i++) {
      tempOtherCards.push(deck.cards.splice(0, 10));
    }
    setOtherCards(tempOtherCards);
  };

  useEffect(() => {
    //Oyunu başlatır
    if(isGameStarted){
      startGame();
    }
  }, [isGameStarted]);

  const flipLastCard = (draggedColon) => {
    //Bir kart kolonda kapalı kalabilmesi için ancak o kolondan bir kartı alıp başka kolona koymuş olmalıyız.
    //O kolonda kalan son karta bak kapalıysa çevir
    setColonCards(
      colonCards.map((colon) => {
        if (colon.colonId === draggedColon) {
          return {
            ...colon,
            cards: [
              ...colon.cards.map((card, index) => {
                if (index === colon.cards.length - 1) {
                  return { ...card, isDown: false };
                } else {
                  return card;
                }
              }),
            ],
          };
        } else {
          return colon;
        }
      })
    );
  };

  const distributeCards = () => {
   //Ekstradan 5 kez daha dagıtılacak kartları bastıkca dağıtır :)
    let isBoardAbleToDistributeCards = true;
    colonCards.forEach((colon) => {
      if (colon.cards.length <= 0) {
        isBoardAbleToDistributeCards = false;
        toast.error("Her kolonda en az bir kart olmalıdır.");
      }
    });
    if (isBoardAbleToDistributeCards && otherCards.length > 0) {
      setColonCards(
        colonCards.map((colon, index) => ({
          ...colon,
          cards: [...colon.cards, otherCards[0][index]],
        }))
      );
      setOtherCards(otherCards.slice(1));
    }
  };
  
  useEffect(() => {
    if (lastDraggedColon) {
      //Kartını aldıgımız son colonda kalan kart kapalı olabilir kontrol et
      flipLastCard(lastDraggedColon.id);
    }
  }, [lastDraggedColon]);

  const checkIfADeckFinished = (colonId) => {
    //Oyunda tamamlanan herhangi bir seriyi takip eder.

    //Bu fonksiyon'u takip eden useEffect son droplanan kolonu takip eder.
    //Eger bir seriyi bitirmişsek o son oynanan kolonda olması mecbur :)

    //Genel çalışma mantıgı
    //-Son üstüne kart bırakılan kolona bak
    //-Kartların state'i yukarıdan aşşagıya aktıgı için kolonu ters çevir
    //-ilk index As ve 12. index Papaz ise muhtemelen bir seri var
    //-yinede her ihtimale karşı 12. indexe kadar kartların degerlerini topla 91 ise seri tamamdır kes gitsin :)

    const copyColonCards = colonCards.map((item) => ({
      ...item,
      cards: [...item.cards],
    }));
    const reversedCards = copyColonCards[colonId].cards.reverse();
    const firstCard = reversedCards[0];
    const thirteenthCard = reversedCards[12];

    const valueFirstCard = firstCard?.value; //ilk kartın papaz olması lazım value=13;
    const valueThirteenthCard = thirteenthCard?.value; //son kartın as olması lazım value=1;

    const isFirstCardDown = firstCard?.isDown; // Tabiki kartların açık olması lazım :) yoksa üstteki kapalı kartlarıda seriye dahil edebilir
    const isThirteenthCardDown = thirteenthCard?.isDown;

    if (
      valueFirstCard === "13" &&
      valueThirteenthCard === "1" &&
      !isFirstCardDown &&
      !isThirteenthCardDown
    ) {
      const totalOfset = reversedCards
        .slice(0, 13)
        .reduce((acc, item) => acc + parseInt(item.value), 0);
      if (totalOfset === 91) {
        //1'den 13'e kadar kartların toplamı 91 olması lazım
        reversedCards.splice(0, 13);
        if (reversedCards[0]?.isDown === true) {
          reversedCards[0].isDown = false;
          //Seri varsa kartları sildikten sonra bir üstteki kart down olabilir onu check ediyor.
        }
        reversedCards.reverse();
        setColonCards(copyColonCards);
        setFinishedDecks(finishedDecks + 1);
      } else {
        console.log("seri yanlış");
      }
    } else {
      console.log("seri yok");
    }
  };


  useEffect(() => {
    if (lastDroppedColon) {
      //Yukarda bahsettigim gibi bir deck ancak droplanan kolonda bitebilir.
      checkIfADeckFinished(lastDroppedColon.id);
    }
  }, [lastDroppedColon]);

  useEffect(() => {
    //Tamamlanan deck 8 tane ise oyun bitmiştir.
    if(finishedDecks>0){
      toast.success(`${finishedDecks}. Seri Tamamlandı.`)
    }
    if (finishedDecks === 8) {
      setGameIsFinished(true);
    }
  }, [finishedDecks]);



  let timerInterval;
  useEffect(()=>{
     if(isGameStarted){
      timerInterval=setInterval(()=>{
        setTime(time=>time+1)
        if(gameIsFinished){
            clearInterval(timerInterval)
        }
    },1000)
     }

      //component unmounth olunca intervalı temizlememiz lazım ki üst üste çagırmasın
      return ()=>clearInterval(timerInterval)
  },[gameIsFinished,isGameStarted])
  return (
    <ColonCardProvider
      value={{
        colonCards,
        setColonCards,
        lastDraggedColon,
        setLastDraggedColon,
        lastDroppedColon,
        setLastDroppedColon,
        otherCards,
        setOtherCards,
        gameIsFinished,
        setGameIsFinished,
        distributeCards,
        checkIfADeckFinished,
        finishedDecks,
        restartGame,
        isGameStarted,
        setIsGameStarted,
        time
      }}
    >
      {children}
    </ColonCardProvider>
  );
};
export default WithColonCards;
