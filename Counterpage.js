import { useState } from "react"


export default function Counterpage() {
    const [value, setValue] = useState(0)
    return (
        <div id="parent" >
            <h1>Simple Counter App</h1>
            <p> Count: {value} </p>
            <button className="button" onClick={() => setValue(0)} >Reset</button>
            <button className="button" onClick={() => setValue(value + 1)} >Increase</button>
            <button className="button" onClick={() => setValue(value - 1)} >Decrease</button>


        </div>
    )
}
