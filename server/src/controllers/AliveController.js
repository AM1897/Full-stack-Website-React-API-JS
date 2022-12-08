import StatusCode from "../utils/StatusCode.js"

const alive = (req, res) => {
    res.status(StatusCode.OK).send(`Hello world!`)
}

export default {
    alive,
}