import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

const databaseCollection = process.env.MONGODB_COLLECTION

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
}, {
    timestamps: true
})


const UserModel = new mongoose.model(databaseCollection, UserSchema)

export default UserModel