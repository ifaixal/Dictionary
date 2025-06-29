import './Footer.css'
import React from 'react'

const Footer = (props) => {
  return (
    <div>
      <div className="Source">
        <p className='Name'>Source</p>
        <a className='tag' target='_blank' href={props.data.sourceUrls}>
            <p>{props.data.sourceUrls}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <path fill="none" stroke="hsl(274, 82%, 60%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"/>
            </svg>
        </a>
      </div>
      <div className="developer">
        <p>Developed by @iFaixal 🐺</p>
      </div>
    </div>
  )
}

export default Footer
