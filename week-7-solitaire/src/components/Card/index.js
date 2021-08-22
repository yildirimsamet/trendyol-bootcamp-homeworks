import { useDrag } from "react-dnd";
import { ValueToShow } from "../../utils/general";
import classNames from "classnames";
import "./styles.scss";
const Card = ({
  className,
  suit,
  value,
  pushToTop,
  id,
  colonId,
  draggable,
  isDown,
}) => {
  const [_, dragRef] = useDrag({
    type: "card",
    item: { value, id, colonId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      opacity: monitor.isDragging() ? 1 : 1,
    }),
  });

  const ThisCardsValueToShow = ValueToShow(value);
  return (
    <div
      ref={dragRef}
      style={{
        top: `${pushToTop}px`,
      }}
      className={classNames(
        "card",
        (draggable === false || isDown === true) && "eventsNone bgFade",
        className && className
      )}
      id={`card${id}`}
    >
      {isDown ? (
        <img className="cardImage" src="/images/cardBack.png" />
      ) : (
        <>
          <span className="cardTopLeft cardBadge">
            {ThisCardsValueToShow + " " + suit}
          </span>
          <span className="cardTopRight cardBadge">
            {ThisCardsValueToShow + " " + suit}
          </span>
          <span className="cardBottomLeft cardBadge">
            {ThisCardsValueToShow + " " + suit}
          </span>
          <span className="cardBottomRight cardBadge">
            {ThisCardsValueToShow + " " + suit}
          </span>
          <p className="cardMain">{ThisCardsValueToShow + " " + suit}</p>
        </>
      )}
    </div>
  );
};
export default Card;
