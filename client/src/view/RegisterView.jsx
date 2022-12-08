import css from './css/RegisterView.module.css'
import {useState} from 'react'
import UserService from '../utils/api/services/UserService'
import {useNavigate} from 'react-router-dom'
import RoutingPath from '../router/RoutingPath'

const RegisterView = () => {
    const [data, setData] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const sendDataToApi = () => {
        const newUser = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'password': password
        }
        UserService.registerUser(newUser)
            .then(response => {
                setData(response.data)
                navigate(RoutingPath.login)
            })
            .catch(error => console.log(error))
    }


    return (
        <main>
            <section>
                <div className={css.container}>
                    <div className={css.emtyContainer}></div>
                    <div className={css.inputContainer}>
                        <h2 className={css.h2}>Register a user</h2>
                        <input
                            className={css.input}
                            type="firstname"
                            placeholder='Firstname'
                            onChange={event => setFirstName(event.target.value)}
                        />
                        <br/>
                        <input
                            className={css.input}
                            type="lastname"
                            placeholder='Lastname'
                            onChange={event => setLastName(event.target.value)}
                        />
                        <br/>
                        <input
                            className={css.input}
                            type="email"
                            placeholder='Email'
                            onChange={event => setEmail(event.target.value)}
                        />
                        <br/>
                        <input
                            className={css.input}
                            type="password"
                            placeholder='Password'
                            onChange={event => setPassword(event.target.value)}
                        />
                        <br/>
                        <br/>
                        <button className={css.buttonSignIn} onClick={sendDataToApi}>Sign up</button>
                    </div>
                    <div className={css.emtyContainer}></div>
                </div>
            </section>
        </main>
    )
}

export default RegisterView