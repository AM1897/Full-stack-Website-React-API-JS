import http from '../AliveApi'

const alive = () => {
    return http.get('/helloWorld')
}

export default {
    alive
}