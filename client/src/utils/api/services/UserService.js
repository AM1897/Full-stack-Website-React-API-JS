import http from '../AliveApi'

const registerUser = (newUser) => {
    return http.post('/createUser', newUser)
}

const login = (payload) => {
    console.log(payload)
    return http.post('/verify', payload)
}

const profile = () => {
    return http.get('/profile')
}

export default {
    registerUser,
    login
}