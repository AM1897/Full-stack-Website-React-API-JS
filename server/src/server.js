import express from 'express'
import dotenv from 'dotenv'
import Middlewares from "./middlewares/Middlewares.js"
import Configurations from "./configurations/Configurations.js";
import ApplyMiddlewares from "./configurations/ApplyMiddlewares.js"
import AliveRoute from "./routes/AliveRoute.js";
import UserRoute from "./routes/UserRoute.js";


dotenv.config()
const app = express()

ApplyMiddlewares(app)
app.use(express.urlencoded({ extended: true }))


AliveRoute.aliveRoute(app)
UserRoute.userRoute(app)

app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configurations.connectToPort(app)
Configurations.connectToDatabase(app)

export default app