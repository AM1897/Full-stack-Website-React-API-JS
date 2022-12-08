import { useEffect, useState } from "react";
import AliveService from "../utils/api/services/AliveService.js";

const Alive = () => {
    const [data, setData] = useState('')

    const checkIfApiIsAlive = () => {
        AliveService.alive()
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect( () => {
        checkIfApiIsAlive()
    }, [])

    const displayData = () => {
        if (data.length !== 0) {
            return <h3>{ data }</h3>
        }
    }

    return (
        <>
            { displayData() }
        </>
    )
}

export default Alive