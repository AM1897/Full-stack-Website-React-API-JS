import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutingPath from "./RoutingPath"
import Login from '../view/LoginView'
import Start from '../view/StartView'
import Register from '../view/RegisterView'
import Profile from '../view/ProfileView'

const Routing = (props) => {
    return(
        <BrowserRouter>
            {props.children}
            <Routes>
                <Route path={RoutingPath.login} element={<Login/>} />
                <Route path={RoutingPath.logout} element={<Start/>} />
                <Route path={RoutingPath.register} element={<Register/>} />
                <Route path={RoutingPath.profile} element={<Profile/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing