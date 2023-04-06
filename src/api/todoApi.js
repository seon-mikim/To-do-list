import { instance } from '../axios/axios'


export const getTodos = async() => {
    const response = await instance.get('/todos')
 
    return response.data
}

