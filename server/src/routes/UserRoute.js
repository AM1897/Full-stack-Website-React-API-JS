import UserController from '../controllers/UserController.js'


const userRoute = (app) => {
    app.post('/createUser', UserController.createUser)
    app.get('/getUsers', UserController.getUsers)
    app.put('/updateUser/:id', UserController.updateUser)
    app.delete(`/deleteUserById/:id`, UserController.deleteUserById)

    app.post('/verify', UserController.verify)

    app.get('/verify/', UserController.verify)
    app.get('/email/', UserController.getEmail)
}

export default {
    userRoute
}