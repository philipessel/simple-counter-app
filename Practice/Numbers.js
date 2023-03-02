import React from 'react'

export default function Numbers() {
    const name = ["alice", "bob", "charle", "danielle"]
    const listname = name.map((name) => (<p>{name[0].toUpperCase() + name.slice(1)}</p>))



    return (
        <div> {<p>listname</p>}</div>

    )
}
