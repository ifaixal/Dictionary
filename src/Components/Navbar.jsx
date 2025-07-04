import React from 'react'
import './Navbar.css'

const Navbar = ({onToggleTheme}) => {
  return (
    <div id="navbar">
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38">
        <g fill="none" fill-rule="evenodd" stroke="#838383" stroke-linecap="round" stroke-width="1.5"><path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"/>
        <path stroke-linejoin="round" d="M5 37a4 4 0 1 1 0-8"/>
        <path d="M11 9h12"/>
        </g>
      </svg>
      <div className="navbarLeftSide">
        <div className="changeFont">
              <p className='selectedFont'>Roboto Condensed</p>
              <svg id='dropdownIcon' xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8">
                <path fill="none" stroke="#A445ED" stroke-width="1.5" d="m1 1 6 6 6-6"/>
              </svg>
          </div>
          {/* End of ChangeFont Section */}
            <label htmlFor="checkbox" id="switch">
              <input type="checkbox" name="" id="checkbox" onChange={onToggleTheme}/>
              <span className="slider round"></span>
            </label>
            <svg id='moonIcon' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
              <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/>
            </svg>
      </div>
      {/* End of NavbarLeft Side Section */}
    </div>
  )
}

export default Navbar
