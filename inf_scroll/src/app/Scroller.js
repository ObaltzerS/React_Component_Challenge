"use client";
import { useEffect, useRef ,useState} from "react";
import { useCards } from "./Context";
import Card from "./Card";

export default function Scroller() {
  const { cards, newCardId, addCard} = useCards();
  const cardRefs = useRef({});
  const scrollerRef = useRef(null)

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const handleScroll = () => {
      const distanceFromBottom = scroller.scrollHeight - scroller.scrollTop;

    if (distanceFromBottom <= scroller.clientHeight) // check if scroller has reached bottom
      addCard();
    };

    scroller.addEventListener("scroll", handleScroll);

    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, [cards]);
  

  useEffect(() => {
    if (!newCardId) return;
    const newCard = cardRefs.current[newCardId];

    if (!newCard) return;
     requestAnimationFrame(() => {
      newCard.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
    newCard.classList.add(".highlight");
  }, [newCardId]);



  console.log(cards);
  return (
    <div
      ref={scrollerRef}
      className="w-full max-w-lg h-[60vh] sm:h-[65vh] bg-white rounded-2xl shadow-lg p-4 space-y-4 overflow-y-auto"
    >
    {cards.map((c,i) => (
      <div ref={(el) => (cardRefs.current[c.id] = el)} key={c.id} >
        <Card name={c.name} id={c.id} isNewest={String(c.id) === String(newCardId)}/>
      </div>
    ))}
    </div>
  );
}
