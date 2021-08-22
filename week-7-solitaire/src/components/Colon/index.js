import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { toast } from "react-toastify";
import { useColonCards } from "../../contexts/ColonCards";
import Card from "../Card";
import "./styles.scss";

const Colon = ({ cards, id }) => {
  const {
    colonCards,
    setColonCards,
    setLastDraggedColon,
    setLastDroppedColon,
  } = useColonCards();
  const [thisColonsCards, setThisColonsCards] = useState({ cards: [] });
  const [_, dropRef] = useDrop({
    accept: "card",
    drop: (item) => {
      handleDrop(item.colonId, id, item);
      setLastDraggedColon({ id: item.colonId });
      setLastDroppedColon({ id: id });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    if (!!colonCards.length) {
      //Bu colonun kendi kartları yani bu colonun id si kaçsa genel card state'imizin bu id'li indexi;
      setThisColonsCards(
        colonCards.filter((colonCard) => colonCard.colonId === id)[0]
      );
    }
  }, [colonCards]);
  const handleDrop = (draggedColon, droppedColon, draggedItem) => {
    if (draggedColon === droppedColon) return;

    const droppedColonLastItem =
      colonCards[droppedColon].cards[colonCards[droppedColon].cards.length - 1];

    if (droppedColonLastItem?.id) {
      //Eger dropladıgımız alanda son kart var ise değeri, dragladıgımız kartın degerinin bir fazlası olmalı
      if (+droppedColonLastItem.value - 1 !== +draggedItem.value) {
        toast.error("Yanlış Hamle !")
        return;
      }
    }

    const colonCardsCopy = [...colonCards];

    // dragladıgımız kartın index o colondaki indexini bul (altında başka kartlar varsa onlarla birlikte almak için)
    // altında seri yoksa kart zaten draggable degildir.
    const indexOfDraggedCard = colonCards[draggedColon].cards.findIndex(
      (card) => card.id === draggedItem.id
    );

    //dragladıgımız karttan itibaren altını kes dropladıgımız kolona yapıstır;
    setColonCards(
      colonCards.map((item) => {
        if (item.colonId === droppedColon) {
          return {
            ...item,
            cards: [
              ...item.cards,
              ...colonCardsCopy
                .filter((colon) => colon.colonId === draggedColon)[0]
                .cards.splice(indexOfDraggedCard),
            ],
          };
        } else {
          return { ...item };
        }
      })
    );
  };

  return (
    <>
      <div ref={dropRef} id={id} className="colonWrapper">
        {!!cards.length &&
          cards.map((card, index) => {
            //Kartları dönen bir map fakat kart dağıtılmadan draggable prop olarak geçiyor
            //Kartın draggable'ı otomatik true başlar bulundugu indexten itibaren alta dogru bütün kartlar bir azalarak gidiyorsa o kart ancak öyle draggable olabilir. Kuralı bozan herhangi bir durumda direk draggable false olur;

            let isDraggable = true;
            const wantedCardIndex = thisColonsCards.cards.findIndex(
              (item) => item.id === card.id
            );
            let thisCardvalue = +card.value;
            thisColonsCards.cards
              .slice(+wantedCardIndex + 1)
              .forEach((item, index) => {
                if (+item.value === thisCardvalue - 1) {
                  thisCardvalue = +item.value;
                } else {
                  isDraggable = false;
                }
              });

            return (
              <Card
                draggable={isDraggable}
                colonId={id}
                pushToTop={index * 35}
                key={index}
                {...card}
              />
            );
          })}
      </div>
    </>
  );
};
export default Colon;
