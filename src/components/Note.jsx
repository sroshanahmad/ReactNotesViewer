
import { deletes } from "../api/APICalls"

export function Note({id,data,date,setNote,trigerToggleUpdate}) {
    
    const displayDate = date_string => {

        let [day,date_and_month] = date_string.split(',')
        let date = date_and_month.split(' ')[1]
        let month = date_and_month.split(' ')[2]
        return `${day}, ${date} ${month}`
    }
    function enableModal(id,data) {
        document.querySelector('.modal').style.display = 'block'
        setNote({id,data})
    
    }
    const deleteNoteData = async (id) => {
        await deletes(id)
        trigerToggleUpdate()
    }
    return (
        <>
        <li key={id}>
            <p className="note-content">{data}</p>
            <p className="note-content">{displayDate(date)}</p>
            <button className="edit-button" onClick={() => enableModal(id,data)}>Edit</button>
            <button className="delete-button" onClick={() => deleteNoteData(id)}>Delete</button>
        </li>
        </>
    )
}