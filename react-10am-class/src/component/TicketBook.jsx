import React, { useState } from "react";
import { HomeComp } from "./HomeComp";

function TicketBook() {

    const [count, setcount] = useState(1);


    const handleAdd = () => {
        if (count == 10) {
            setcount(0)

        } else {
            setcount(count + 1)
        }
    }
    return (
        <div>
            <h1 className="luf">Count -  {count}</h1>

            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TicketBook;