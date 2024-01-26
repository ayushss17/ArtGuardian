import React from 'react'

const frame = () => {
  return (
    <div>
      {
        <frameset rows="30%,70%">
        <frame name="header" src="Products.js"></frame>
        <frame name="Products" src=""></frame>
    </frameset>
      }
    </div>
  )
}

export default frame
