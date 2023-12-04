const baseURL = 'http://127.0.0.1:5000/api'

export const get = async () => {
    try {

        const response = await fetch(`${baseURL}/notes`)
        const data = await response.json()
        if(response.ok) return data
        else throw new Error(`${response.status}: ${response.statusText}`)
    }
    catch (error) {
        console.log(error)
    }
}


export const post = async (data) => {
    try{
        const response = await fetch(`${baseURL}/notes`, {
            method: "POST",
            body: JSON.stringify({
                'data': data,
              }),
            headers: {
                    "Content-type": "application/json; charset=UTF-8"
            }
        })
        if(response.ok) return 'Note created !'
        else throw new Error(`${response.status}: ${response.statusText}`)
    }
    catch (error) {
        console.log(error)
    }

}


export const put = async (id,data) => {

    try {
        const response = await fetch(`${baseURL}/notes/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                'data': data,
              }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        if(response.ok) return 'Note updated !'
        else throw new Error(`${response.status}: ${response.statusText}`)
    }

    catch (error) {
        console.log(error)
    }
}


export const deletes = async (id) => {
    try {

        const response = await fetch(`${baseURL}/notes/${id}`, {
            method: 'DELETE'})
        if(response.ok) return 'Note Deleted !'
        else throw new Error(`${response.status}: ${response.statusText}`)
    }
    catch (error){
        console.log(error)
    }
}