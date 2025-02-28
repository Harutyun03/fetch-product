import './Card.css'
import { useNavigate } from 'react-router-dom'


function Cards({card}){

    const navigate = useNavigate()
    const goback = () => {
        navigate(-1)
    }
    return(
        <div>
            {
                card.map((e) => {
                    return(
                    <div className="item-card">
                        <li>{e.title}</li>
                        <img src={e.image} className='image'/>
                        <p>{e.price}</p>
                        <button onClick={goback} className='btn'>Go back</button>
                    </div>
                    )  
                    
                })
            }
        </div>
    )
}

export default Cards