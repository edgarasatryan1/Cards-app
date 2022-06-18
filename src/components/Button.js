import React from "react";
import { useCardsAndCardsFunctions } from "./CardsProvider";
export default function Button(props) {
  const { addCardFunction, sortCardFunction } = useCardsAndCardsFunctions();

  return (
    <>
      <button
        onClick={
          props.title === "Add card" ? addCardFunction : sortCardFunction
        }
      >
        {props.title}
      </button>
    </>
  );
}
