import React, { useEffect, useLayoutEffect, useInsertionEffect, useId } from "react";

export default function TestTwo() {

    //  automating batch
    // const handleadd = () => {
    //     setcount(i)
    //     setname("Ash")
    // }


    useInsertionEffect(() => {
        console.log("useInsertionEffect");
    }, [])

    useLayoutEffect(() => {
        console.log("UseLayoutEffect");
    }, [])

    useEffect(() => {
        console.log("useEffect");
    }, [])

    let id = useId()
    console.log(id, "id");

    return (
        <>
            {console.log("dom updated")}
            < h1 > Ashima</h1 >
        </>
    )
}