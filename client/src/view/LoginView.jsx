import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import css from './css/LoginView.module.css'
import UserService from '../utils/api/services/UserService'
import RoutingPath from '../router/RoutingPath'
import { UserContext } from '../utils/global/Provider/LogInProvider'


const LoginView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [eMail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState(false)

    const navigate = useNavigate()

    const verifyUser = () => {

        const payload = {
            'email': eMail,
            'password': password
        }
        console.log(payload)
        UserService.login(payload)
            .then(response => {
                setData(response.data.message) //Arasto
                console.log(data)
                navigate(RoutingPath.profile)
            })
            .catch(error => console.log(error))
    }

    return (
        <main>
            <div className={css.gridContainer}>
                <section></section>
                <section className={css.section}>
                    <h1 className={css.h1}>Login</h1>
                    <input className={css.inputEmail}
                        type="text"
                        placeholder='Your email'
                        onChange={event => setEmail(event.target.value)} />
                    <br />

                    <input className={css.inputPassword}
                        type="password"
                        placeholder='Password'
                        onChange={event => setPassword(event.target.value)}
                    />
                    <br />
                    <button className={css.buttonLogin} onClick={verifyUser}>Login</button>
                </section>
                <section></section>
            </div>
        </main>
    )
}

export default LoginView