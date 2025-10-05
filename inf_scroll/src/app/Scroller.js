"use client";
import { useEffect, useRef } from "react";
import { useCards } from "./Context";
import Card from "./Card";

export default function Scroller({ className = "" }) {
  const { cards, lastCardId} = useCards();
  const cardRefs = useRef({});

  useEffect(() => {
    if (lastCardId && cardRefs.current[lastCardId]) {
      cardRefs.current[lastCardId].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [lastCardId, cards]);

  console.log(cards);
  return (
    <div
      className={
        "w-full max-w-lg bg-white rounded-2xl shadow-lg p-4 space-y-4 overflow-y-auto flex-shrink-0 " +
        // keep a consistent height relative to viewport so it doesn't grow
        "max-h-[60vh] sm:max-h-[65vh] " +
        className
      }
    >
    {cards.map((c,i) => (
      <div ref={(el) => (cardRefs.current[c.id] = el)} key={c.id}>
        <Card/>
      </div>
    ))}
    </div>
  );
}
