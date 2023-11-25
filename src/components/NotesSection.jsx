import { Note } from "./Note"
import { Modal } from "./Modal"
import { useState } from "react"


function disableModal() {
    document.querySelector('.modal').style.display = 'none'
}

export function NotesSection({notes,trigerToggleUpdate}) {

    const [note, setNote] = useState({})

    return(
        <>
            <div className="notes-section">
                <h2>Your Notes</h2>
                <div id="notes">
                    <div className="note">
                        { notes.map( note_item => {
                            return (
                                <>
                                    <Note id={note_item.id} data={note_item.data} date={note_item.date} setNote={setNote} trigerToggleUpdate={trigerToggleUpdate}/>
                                </>
                            )
                        }) }
                    </div>
                </div>
                <Modal disableModal={disableModal} note={note} trigerToggleUpdate={trigerToggleUpdate}/>
            </div>
        </>
    )
}