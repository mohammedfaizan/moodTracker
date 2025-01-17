import { useState } from "react";

export default function MoodForm({ setMoodHistory }) {
    const [mood, setMood] = useState("");
    const [note, setNote] = useState("");
    
      

    const handleLog = (e) => {
        e.preventDefault();
        const newMood = document.getElementById("input").value
        const newNote = document.getElementById("note").value
        if (newMood && newNote ) {
            localStorage.setItem(newMood, newNote)
            setMood(mood)
            setNote(note)
            setMoodHistory((prevHistory) => [...prevHistory, [newMood, newNote] ])
        }
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleLog} className="moodForm" id="moodForm">
            
            <input type="text" id="input" placeholder="How are you feeling?" />
            <textarea name="note" id="note" placeholder="add a note..."></textarea>
            <button>Log Mood</button>
        </form>
        </div>
    )
}