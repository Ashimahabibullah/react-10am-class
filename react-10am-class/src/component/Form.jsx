import React, { useState } from "react";

let count = 0
export default function Form() {
    count++

    console.log(count);
    const [name, setname] = useState("")

    const handlename = (e) => {
        console.log(e.target.value);
        setname(e.target.value)

    }
    return (
        <div>
            <h1>Student Form</h1>

            <label>Name - </label>
            <input onChange={handlename} placeholder='enter' />

            <br />

            <label>Age:</label>
            <input placeholder='enter' />

            <h1>{name}</h1>
        </div>
    )
}