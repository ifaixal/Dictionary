import './App.css'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import Word from './Components/Word'
import Content from './Components/Content'
import Footer from './Components/Footer'
import NotFound from './Components/NotFound'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wordFound, wordSet] = useState(true);
  const [data, setData] = useState(null);
  const [word, getWord] = useState("sorrow");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
      if(!response.ok)
      {
        wordSet(false);
        setData(null);
      }

      else{
        const json = await response.json();
        wordSet(true);
        setData(json[0]);
        console.log(json);
      }
    }

    fetchData();
  }, [word])

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  function handleSearchBar(value)
  {
    getWord(value);
  }


  return (
    <div className='App'>
      <Navbar onToggleTheme={() => setDarkMode(prev => !prev)} />
      <SearchBar onSubmit={handleSearchBar} />
      {wordFound && data && (
        <>
          <Word data={data} />
          <Content data={data} />
          <Footer data={data}/>
        </>
      )}
      {!wordFound && <NotFound />}

    </div>
  )
}

export default App
