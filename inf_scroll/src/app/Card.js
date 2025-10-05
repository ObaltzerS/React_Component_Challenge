"use client";

import React from 'react';

export default function Card(name) {
    return (
        <div
          className="bg-gray-100 p-4 rounded-xl shadow-sm flex flex-col"
        >
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 mt-1">This is a card</p>
        </div>  
    );
}
