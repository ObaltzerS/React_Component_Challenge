import Image from "next/image";
import Counter from "./counter.js";
import Scroller from "./scroller.js";
import AddButton from "./add_button.js";

export default function Home() {
  return (
    <div className="relative h-screen">
      
      <main className="flex justify-center items-center h-full overflow-y-auto">
        <Scroller></Scroller>
      </main>

      <div className="absolute bottom-4 left-4">
      <Counter></Counter>
      </div>

      <div className="absolute bottom-4 right-4">
      <AddButton></AddButton>
      </div>

    </div>
  );
}
