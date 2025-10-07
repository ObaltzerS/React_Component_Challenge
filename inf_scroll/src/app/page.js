"use client";

import Counter from "./Counter";
import Scroller from "./Scroller";
import AddButton from "./AddButton";
import { Provider, useCards } from "./Context";

export default function Home() {
  return (
    <Provider>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-lg flex flex-col items-center gap-6">
          <Scroller/>
          <div className="w-full flex justify-between items-center">
            <Counter />
            <AddButton />
          </div>
        </div>
      </div>
    </Provider>
  );
}
