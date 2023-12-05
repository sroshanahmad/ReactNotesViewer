import { useEffect, useState } from 'react'
import './App.css'
import { NotesSection } from './components/NotesSection'
import { NoteCreationSection } from './components/NoteCreationSection'

import { get } from './api/APICalls'


function App() {

  const [notes, setNotes] = useState([])
  const [trigerToggle, setTriggerToggle] = useState(false)
  
  useEffect( () => {
  
    loadNotes()
    
  },[trigerToggle])
  
  const loadNotes = async () => {
    const data = await get()
    setNotes(data)
  }

  const trigerToggleUpdate = () => {
    setTriggerToggle(prev => !prev);
  }
  
  return (
      <div className="container">
        <NotesSection notes={notes} trigerToggleUpdate={trigerToggleUpdate}/>
        <NoteCreationSection trigerToggleUpdate={trigerToggleUpdate}/>
      </div>
  )
}

export default App
