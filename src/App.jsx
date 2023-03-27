import { useState } from 'react'
import './App.css'
import InfoContainer from './components/InfoContainer'
import phrases from './db/phrases.json'

const images = ['bg1', 'bg2', 'bg3','bg4']

function App() {

  const getRandomPhrase = (phrasesList) => {
    const randomIndex = Math.floor(Math.random() * phrasesList.length)

    return phrasesList[randomIndex]
  }

  const handleChangeQuote = () => { 
    setQuote(getRandomPhrase(phrases))
    setBgImage(getRandomPhrase(images))
   }

  const [quote, setQuote] = useState(getRandomPhrase(phrases))



  const [bgImage, setBgImage] = useState(getRandomPhrase(images))



  return (
    <div className={`App ${bgImage}`}>
      <InfoContainer quote={quote} handleChangeQuote={handleChangeQuote}  />
    </div>
  )
}

export default App
