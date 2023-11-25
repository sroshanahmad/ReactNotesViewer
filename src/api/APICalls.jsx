const baseURL = 'http://127.0.0.1:5000'

export const get = async () => {
    const response = await fetch(`${baseURL}/notes/`)
    const data = await response.json()
    return data
}

export const post = async (data) => {

    const response = await fetch(`${baseURL}/notes/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
           'Content-Type': 'application/json'
        }
    })
    if(response.ok) return 'Note created !'
}

export const put = async (id,data) => {

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
}

export const deletes = async (id) => {

    const response = await fetch(`${baseURL}/notes/${id}`, {
        method: 'DELETE',
        header: {
           'Accept' : 'application/json',
           'Content-Type' : 'application/json',
          }
        })
    if(response.ok) return 'Note Deleted !'
}