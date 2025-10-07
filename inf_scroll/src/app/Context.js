// context/Context.js
"use client";

import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export function Provider({ children }) {
  
  const [cards, setCards] = useState([]);
  const [newCardId, setNewCardId] = useState()

  const names = [
    "Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hannah", 
    "Isaac", "Jack", "Karen", "Liam", "Mia", "Nathan", "Olivia", "Paul", 
    "Quinn", "Rachel", "Sophia", "Thomas", "Uma", "Victor", "Wendy", 
    "Xander", "Yara", "Zoe"
  ];

  const addCard = () => {
    const newCard = {
      id: crypto.randomUUID(),
      name: names[Math.floor(Math.random() * names.length)],
    };
    setCards((prev) => {
      const newCards = [...prev, newCard].sort((a, b) => a.name.localeCompare(b.name));
      setNewCardId(newCard.id);
      return newCards;
    });
  };

  const removeCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <CardContext.Provider value={{ cards, addCard, removeCard, newCardId }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCards() {
  return useContext(CardContext);
}
