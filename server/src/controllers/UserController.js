import UserModel from "../models/UserModel.js";
import Logger from '../utils/Logger.js'
import StatusCode from "../utils/StatusCode.js";
import bcrypt from 'bcrypt'

const saltRounds = 10

const encryptPassword = async (password) => {
    let newPassword = ""
    await bcrypt.hash(password, saltRounds)
        .then(function (hash) {
            newPassword = hash
        })
    return newPassword
}

const createUser = async (req, res) => {
    Logger.info('createUser()')
    Logger.http(req.body)
    let { firstName, lastName, email, password } = req.body
    // Bcrypt
    password = await encryptPassword(password)
    if (firstName && lastName && email && password) {
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }
        Logger.debug(newUser)
        try {
            const user = new UserModel(newUser)
            const response = await user.save()
            Logger.debug(response)
            res.status(StatusCode.CREATE).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({
                error: 'Error to create a new user.'
            })
        }
    } else {
        Logger.error('You failed!')
        res.status(StatusCode.NO_CONTENT).send('No body')
    }
}

const getUsers = async (req, res) => {
    try {
        UserModel.find({}, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting users'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(user)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting users'
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const updateUsers = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password
        }
        Logger.debug(req.params.id)
        Logger.debug(updateUsers)
        UserModel.findByIdAndUpdate(req.params.id, updateUsers, { new: true }, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error updating user with id' + req.params.id
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(user ? user : {
                    message: `User with id '${req.params.id}' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating user'
        })
    }
}

const deleteUserById = async (req, res) => {
    try {
        UserModel.findByIdAndRemove(req.params.id, (error, user) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error deleting user'
                })
            } else {
                Logger.info(user)
                res.status(StatusCode.OK).send(
                    user
                        ?
                        `User with id '${req.params.id}' was deleted from database.`
                        :
                        `User with id '${req.params.id}' not found`
                )
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting user'
        })
    }
}


const getEmail = async (req, res) => {
    try {
        const filter = {};
        const onlyReturnEmail = { email: 1, _id: 0 };

        UserModel.find(filter, onlyReturnEmail, (error, listOfMails) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting email addresses'
                })
            } else {
                Logger.info(listOfMails)
                if (listOfMails === []) {   // If no emails exist
                    res.status(StatusCode.NO_CONTENT).send({
                        message: "No emails in db!"
                    })
                } else {
                    res.status(StatusCode.OK).send(listOfMails)
                }
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting email for user'
        })
    }
}


const verify = async (req, res) => {
    try {
        let { email, password } = req.body
        const query = {email: email}
        const filter = {password:1, _id:0}
        const dbQuery = await UserModel.findOne(query, filter)
        let response 
        await bcrypt.compare(String(password),dbQuery.password)
        .then(function(result){
            response = {
                message: result
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
}


export default {
    createUser,
    getUsers,
    updateUser,
    deleteUserById,
    getEmail,
    verify
}