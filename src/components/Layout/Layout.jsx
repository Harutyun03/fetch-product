import { Outlet } from "react-router-dom"
import Nav from "../Nav/Nav"


function Layout({card}){
    return(
        <div className="layout">
            <Nav card={card}/>
            <Outlet/>

        </div>
    )
}

export default Layout