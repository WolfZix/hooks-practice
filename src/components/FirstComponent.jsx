import React from 'react'

export const FirstComponent = ({ data, fn }) => {
    return (
        <div>
            <button onClick={() => { fn(0) }}>reset</button>
            <h1>X: {data}</h1>
        </div>
    )
}
