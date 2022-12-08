import Axios from "axios"

const AliveApi = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default AliveApi