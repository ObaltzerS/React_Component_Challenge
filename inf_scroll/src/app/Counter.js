"use client";
import { useCards } from "./Context";

export default function Counter() {
  const { cards } = useCards();

  return (
    <div className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow font-medium text-sm">
      {cards.length} cards
    </div>
  );
}
