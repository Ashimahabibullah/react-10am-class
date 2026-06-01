import React, { useEffect } from 'react'

export default function ExampleTwo() {

    useEffect(() => {
        console.log("inside useeffect");
    }, [])
    return (
        <div>
            {console.log("inside return")}
            <h1>Useeffect</h1>
        </div> 
    )
}