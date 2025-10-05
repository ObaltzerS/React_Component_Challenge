"use client";

import { useCards } from "./Context";

export default function AddButton() {
  const { addCard } = useCards();

  return (
    <button
      onClick={() => addCard()}
      className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 hover:shadow-md active:scale-95 transition"
    >
      + Add Card
    </button>
  );
}
