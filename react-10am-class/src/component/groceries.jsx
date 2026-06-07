import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Groceries() {
    const [datas, setdatas] = useState([]);
    const [input, setinput] = useState("");

    useEffect(() => {
        handlefetch()
    }, [])


    const handlefetch = async () => {
        // let res = fetch("http://localhost:3000/todoList", { method: "GET" })
        let res = await axios.get("http://localhost:3000/todoList")
        setdatas(res.data)
    }

    const handleinput = (e) => {
        setinput(e.target.value)
    };

    const handlepost = async () => {
        let body = {
            list: input
        }
        let apisend = await axios.post("http://localhost:3000/todoList", body)

        handlefetch();
    };

    const handledelete = async (id) => {
        let api = await axios.delete("http://localhost:3000/todoList/" + id)
        handlefetch();
    }

    const handleedit = async (details) => {
        let updateddate = prompt("enter", details["list"])

        let body = {
            id: details.id,
            list: updateddate
        }
        let apisend = await axios.put("http://localhost:3000/todoList/" + details.id, body);
        handlefetch();

    }

    return (
        <div>
            <h1>Groceries List</h1>

            <input onChange={handleinput} placeholder='Enter' />
            <button onClick={handlepost}>Submit</button>

            {datas.map((da, i) => (
                <div key={da.id}>
                    <h2>{(i = i + 1)}. {da.list}{" "}</h2>
                    <button onClick={() => handleedit(da, i)}>Edit</button>
                    <button onClick={() => handledelete(da.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}