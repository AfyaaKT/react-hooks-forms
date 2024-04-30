import React from 'react'

const DisplayContent = ({lastName , firstName}) => {
  return (
    <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
    </div>
  )
}

export default DisplayContent