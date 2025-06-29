import React from 'react'
import './Content.css'

const Content = ({ data }) => {
  return (
    <div className="contentContainer">
      {data.meanings.map((meaning, idx) => (
        <div key={idx} className="meaningBlock">
          <div className="headingWithLine">
            <h2>{meaning.partOfSpeech}</h2>
            <span className='Line'></span>
          </div>
          <p className='Meaning'>Meaning</p>
          <ul className='ListofContent'>
            {meaning.definitions.map((def, i) => (
              <li key={i}>
                {def.definition}
                {def.example && <p className="example">{def.example}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Content
