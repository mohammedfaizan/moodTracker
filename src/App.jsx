import Header from "./Header"
import MoodForm from "./MoodForm"
import MoodHistory from "./MoodHistory"
import "./App.css"
import { useEffect, useState } from "react"


function App() {

  const [moodHistory, setMoodHistory] = useState([])

  useEffect(() => {
    const history = []
    for (let i = 0; i < localStorage.length; i++) {
      const mood = localStorage.key(i);
      const note = localStorage.getItem(mood);
      console.log(mood, note)
      history.push([mood, note])
  }
  setMoodHistory(history)
  }, [])
  
  return (
   <div className="container">
    <Header/>
    <MoodForm setMoodHistory={setMoodHistory} />
    <MoodHistory moodHistory={moodHistory}/>
   </div>
  )
}

export default App
