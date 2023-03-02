import React from 'react'

import { useState } from "react";

export default function Counterpage() {
    const [value, setValue] = useState(0)

    return (


        <div id="parent">

            <h1> Simple Counter App </h1>
            <p>Counter - {value}</p>
            <button className="btn" onClick={() => setValue(0)}> Reset </button>
            <button className="btn" onClick={() => setValue(value + 5)}> Increment </button>
            <button className="btn" onClick={() => setValue(value - 5)}> Decrement </button>

        </div>


    )
}
