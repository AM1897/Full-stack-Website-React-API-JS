import React from "react";
import Routing from "./router/Routing";
import NavigationBar from "./components/NavigationBar";
import css from './utils/global/style/Global.css'
import Footer from './components/Footer'
import { useContext } from 'react'
import { UserContext } from './utils/global/Provider/LogInProvider'


function App() {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    return (
        <>
            <Routing>
                <NavigationBar/>
            </Routing>
            <Footer/>
        </>
    );
}

export default App;
