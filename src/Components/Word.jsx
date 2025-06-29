import { useRef } from 'react';
import React from 'react'
import './Word.css'

const Word = (props) => {
  const audioRef = useRef(null);
  const word = props.data.word;
  let Phonetic = "";
  let audio = "";
  //setPhonetics
  function setPhonetics() {
    if ('phonetic' in props.data){
      Phonetic = props.data.phonetic;
    }
    if ('phonetics' in  props.data)
    {
      for (let i = 0; i < props.data.phonetics.length; i++)
      {
        if (props.data.phonetics[i].audio != ''){
          audio = props.data.phonetics[i].audio;
          break;
        }
      }
    }
  }

  const playAudio = () => {
    audioRef.current?.play();
  }

  setPhonetics();

  return (
    <div className='mainContainer'>
        <div className="word_AudioContainer">
            <h1 className='word'>{word}</h1>
            <svg onClick={playAudio} className='audioButton' xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75">
                <g fill-rule="evenodd">
                    <circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/>
                    <path className='play' d="M29 27v21l21-10.5z"/>
                </g>
            </svg>
            <audio ref={audioRef} src={audio}></audio>
        </div>
        <p className='Phonetics'>{Phonetic}</p>
    </div>
  )
}

export default Word
