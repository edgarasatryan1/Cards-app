import React from "react";
import { useCardsAndCardsFunctions } from "./CardsProvider";
import { FiX } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
export default function Main() {
  const { cards, deleteCardFunction } = useCardsAndCardsFunctions();
  return (
    <div className="content">
      {cards.map((item, index) => {
        return (
          <div key={uuidv4()} id={index} className="cardDiv">
            {item}
            <FiX
              className="deleteIcon"
              id={index}
              onClick={deleteCardFunction}
            />
          </div>
        );
      })}
    </div>
  );
}
