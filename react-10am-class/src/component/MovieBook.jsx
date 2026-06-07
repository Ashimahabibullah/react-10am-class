import React, { useRef, useEffect } from "react";

export default function MovieBook({ name, rating, setnames }) {

    let inputref = useRef(null)

    const handleclick = () => {
        setnames("Ashima")
    }

    useEffect(() => {
        inputref.current.focus()
    }, [])



    return (
        <>
            {/* <h1>{name}</h1>
            <h2>{rating}/10</h2>

            <button onClick={handleclick}>send data</button> */}

            <input ref={inputref} placeholder='enter' />
        </>
    )
}