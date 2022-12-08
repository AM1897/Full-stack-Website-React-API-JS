import AliveController from "../controllers/AliveController.js";
import {MongoClient} from "mongodb";




const aliveRoute = (app) => {
    app.get('/helloWorld', AliveController.alive)



}
export default {
    aliveRoute
}
