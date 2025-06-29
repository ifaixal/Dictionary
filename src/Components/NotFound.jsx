import './NotFound.css'

import React from 'react'

const NotFound = () => {
  return (
    <div className='NotFound'>
      <p className='Emoji'>😕</p>
      <h2 className='NoDef'>No Definition Found</h2>
      <p className='Description'>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
    </div>
  )
}

export default NotFound
