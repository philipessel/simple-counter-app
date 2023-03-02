import React from 'react'

export default function Cart({ name, age, school, country }) {
    return (
        <div className="Cart-background">
            <p>{name}</p>
            <p>{age}</p>
            <p>{school} </p>
            <p>{country} </p>
        </div>
    )
}
