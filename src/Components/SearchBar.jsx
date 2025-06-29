import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) =>
  {
    if (e.key === 'Enter')
    {
      props.onSubmit(input)
    }
  }

  const handleIconClick = () => {
    if (input.trim()) {
      props.onSubmit(input); // 🔥 Send value to parent
    }
  };

  return (
    <div className='searchBar'>
        <input type="text" className='searchField' placeholder='Search for any word...' onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown}/>
        <svg onClick={handleIconClick} className='searchIcon' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path fill="none" stroke="#A445ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/>
        </svg>
    </div>
  )
}

export default SearchBar
