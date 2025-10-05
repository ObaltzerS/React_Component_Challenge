// context/Context.js
"use client";

import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export function Provider({ children }) {
  
  const [cards, setCards] = useState([]);
  const [lastCardId, setLastCardId] = useState()

  const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

  const addCard = () => {
    const newCard = {
      id: crypto.randomUUID(),
      name: names[Math.floor(Math.random() * names.length)],
    };
    console.log(newCard.name);
    setCards((prev) => {
    const newCards = [...prev, newCard].sort((a,b) => a.name.localeCompare(b.name));
    return newCards;
    });
    setLastCardId(newCard.id);
  };


  return (
    <CardContext.Provider value={{ cards, addCard }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCards() {
  return useContext(CardContext);
}
