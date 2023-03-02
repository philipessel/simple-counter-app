import React from 'react'

export default function Joke({ setup, punchline }) {
    return (
        <div>
            <h3>{setup}</h3>
            <p>{punchline}</p>
            <hr />

        </div>
    )
}