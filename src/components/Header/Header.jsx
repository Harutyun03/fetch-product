import './Header.css'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'


function Header({item, addCard}){

    return(
        <div className="list">
            <p>{item.title}</p>
            <NavLink to={`/${item.id}`}>
                <img src={item.image} />
            </NavLink>
            <p>{item.price}$</p>
            <Button item={item} addCard={addCard}/>
        </div>
    )
}

export default Header