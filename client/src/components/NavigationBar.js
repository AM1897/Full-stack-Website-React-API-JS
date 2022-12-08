import {Link} from "react-router-dom"
import RoutingPath from "../router/RoutingPath";
import css from './style/NavigationBar.module.css'
import { UserContext } from '../utils/global/Provider/LogInProvider'
import {useContext} from 'react'

const NavigationBar = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return(
        <nav>
            <ul className={css.ul}>
                <li className={css.li}><Link to={RoutingPath.register} className={css.link}>Sign up</Link></li>
                <li className={css.li}><Link to={RoutingPath.logout} className={css.link}>Logout</Link></li>
                <li className={css.li}><Link to={RoutingPath.login} className={css.link}>Login</Link></li>
            </ul>
            <h3>{authenticatedUser}</h3>
        </nav>
    )
}

export default NavigationBar