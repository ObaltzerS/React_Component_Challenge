
'use client';
import { children } from "react"

export default function AddButton({children}) {

    const add_card = () => {
        console.log("button clicked");
    }


return (
    <div>
        <button
        onClick={add_card}
        >
            add button element
        </button>
    </div>
)
}
