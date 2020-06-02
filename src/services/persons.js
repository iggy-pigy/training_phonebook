import axios from 'axios'
const baseUrl = '/api/persons'


const getAll = () => {
    //return axios.get(baseUrl)

    //assign the promise to the request variable
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    //return axios.post(baseUrl, newObject)

    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    //return axios.put(`${baseUrl}/${id}`, newObject)

    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    //No data is sent with the request
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    /*getAll: getAll,
    create: create,
    update: update
    remove: remove*/
    getAll, create, update, remove
}