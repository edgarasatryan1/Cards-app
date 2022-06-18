import { useContext, createContext, useState, useEffect, useRef } from "react";
import { randomInteger } from "../utils/randomNumberFunction";
const Context = createContext();
export function useCardsAndCardsFunctions() {
  return useContext(Context);
}
// help
// sessionStorage.removeItem("Cards");
export default function CardsProvider({ children }) {
  const [cards, setCards] = useState([]);
  let countRef = useRef(0);

  useEffect(() => {
    countRef.current++;
    const cards = JSON.parse(sessionStorage.getItem("Cards"));
    if (cards) {
      setCards(cards);
    }
  }, []);

  useEffect(() => {
    if (countRef.current !== 1) {
      sessionStorage.setItem("Cards", JSON.stringify(cards));
    }
  }, [cards]);

  let addCardFunction = () => {
    setCards([...cards, randomInteger(1, 10000)]);
  };

  let sortCardFunction = () => {
    let sortCards = cards.sort((a, b) => a - b);
    setCards([...sortCards]);
  };

  let deleteCardFunction = (ev) => {
    setCards(
      cards.filter((item, index) => {
        return +ev.currentTarget.id !== index;
      })
    );
  };

  const CardAndCardFunctions = {
    cards,
    addCardFunction,
    sortCardFunction,
    deleteCardFunction,
  };

  return (
    <Context.Provider value={CardAndCardFunctions}>{children}</Context.Provider>
  );
}
