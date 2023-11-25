
import { put } from "../api/APICalls"

export function Modal({disableModal, note,trigerToggleUpdate}) {

    const updateNoteData = async (id) => {
        let data = document.getElementById('edit-note-input').value
        await put(id,data)
        trigerToggleUpdate()
        disableModal()
    }
    return (
        <div id="edit-modal" className="modal">
        <div className="modal-content">
            <span className="close-button" onClick={disableModal} >&times;</span>
            <h2>Edit Note</h2>
            <textarea id="edit-note-input" defaultValue={note.data}></textarea>
            <button id="update-button" onClick={ () => updateNoteData(note.id)} >Update Note</button>
        </div>
      </div>
    )
}