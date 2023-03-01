import React from 'react'

function Stand({ title, complete, index, Complete }) {
    return (
        <div className='flex py-5'>
            <input className='checkbox mx-5 text-2xl' type="checkbox" checked={complete} onChange={() => Complete(index)} />
            <h1 className={complete ? "text-2xl text-decoration-line: line-through" : "text-2xl"}>
                {title}
            </h1>
        </div >
    )
}

export default Stand
