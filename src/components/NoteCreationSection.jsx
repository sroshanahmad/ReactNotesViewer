import { useState } from "react"
import { post } from "../api/APICalls"

export function NoteCreationSection({trigerToggleUpdate}) {

    const [data,setNote] = useState('')

    const sendNoteData = async (data) => {
        await post(data)
        trigerToggleUpdate()
    }

    return (
        <div className="note-creation-section">
            <h2>Create a Note</h2>
            <div id="notes-container">
                <div>
                    <textarea name="note" id="note" placeholder="Write your note here..." onChange={ (e) => setNote(e.target.value)}></textarea>
                </div>
                <div>
                <button id="save-button" onClick={ () => sendNoteData(data)}>Save Note</button>
                </div>
            </div>
        </div>
    )
}