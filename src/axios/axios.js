import axios from "axios"

const createInstance = () => {
   const instance = axios.create({
        baseURL: import.meta.env.VITE_SERVER_URL,
        timeout:3000,
        headers: {
            'Content-Type' : 'application/json',
            'apikey':import.meta.env.VITE_SERVER_API_KEY,
            'username': import.meta.env.VITE_SERVER_USER_NAME
        }
    
    })

    return instance

}
export const instance = createInstance()