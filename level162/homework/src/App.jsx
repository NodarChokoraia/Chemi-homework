import React from 'react'
import Game from './components/Game'
import Playlist from './components/Playlist'
export default function App() {
  return (
    <>
      <Game game='RDR2' />
      <Playlist songs={["Blinding Lights", "Levitating", "Peaches", "Stay"]} movies={["Inception", "Interstellar", "The Matrix", "Hereditary"
]}  workout={["Push-ups", "Squats", "Plank", "Burpees"]} science={["Physics", "Biology", "Chemistry", "Astronomy"]}  />
      
    </>
  )
}
