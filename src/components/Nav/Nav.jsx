import './Nav.css'
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Nav({card}){
    
    return(
        <div className='nav'>
            <img className='image' src={`https://t4.ftcdn.net/jpg/03/34/53/51/360_F_334535136_vvbWaKEpsHIMS4dpJUxgXZL6clQX7VGs.jpg`}></img>
            <ul className='parent'>
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>
                <li>List</li>
                <li>Menu</li>
            </ul>
            <NavLink to='/card'>
                 <FaCartPlus/>
                 <sub className='sub'>{card.length}</sub>
            </NavLink>
            <NavLink to='/register'>
               <button className='btn-nav'>Create account</button>
            </NavLink>
            <NavLink to='/login'>
                <button>Login</button>
            </NavLink>
            
        </div>
        
    )
    
}

export default Nav