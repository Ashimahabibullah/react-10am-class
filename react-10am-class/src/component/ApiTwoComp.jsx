import React, { useState } from 'react';

export default function ApiTwoComp() {

    const [apidata, setapidata] = useState([])

    const handlefetch = async () => {
        let res = await fetch("api url")
        let data = await res.json()
        console.log("Luffy");
        setapidata(data)
    }


    return (
        <div>
            <button onClick={handlefetch}>Call Api</button>

            {apidata.map((da, i) => {
                <div>
                    <h1>{da.name}</h1>
                </div>
            })}
        </div>
    )
}