
import { deletes } from "../api/APICalls"

export function Note({id,data,date,setNote,trigerToggleUpdate}) {
    
    const displayDate = date_string => {

        let days_of_week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
        let  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
        let event_string = date_string.split('T')[0]
        let event_date = new Date(event_string)

        let day = days_of_week[event_date.getDay()]
        let date = event_date.getDate()
        let month = months[event_date.getMonth()]

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