"use client";

import React from "react";
import { useCards } from "./Context";

export default function Card({ name, id, isNewest }) {
  const { removeCard } = useCards();

  return (
    <div
      className={`${
      isNewest ? "bg-gray-300" : "bg-gray-100"
      } p-4 rounded-xl shadow-sm flex flex-col transition-colors duration-500`}>

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <button
          onClick={() => removeCard(id)}
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600 mt-1">{isNewest ? "newest card" : "old card"}</p>
    </div>
  );
}
