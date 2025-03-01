import './Card.css'
import { useNavigate } from 'react-router-dom'
import Cardpages from '../../components/Cardpages/Cardpages'


function Cards({card,change,removeItem, ClaerPage}){

    const navigate = useNavigate()
    const goback = () => {
        navigate(-1)
    }

    const clear = () => {
        ClaerPage()
      }
    return(
        <div className='tops'>
            {
                card.map((e) => {
                    return <Cardpages key={e.id} elem={e} change={change} removeItem={removeItem}/>
                })
            }
            <div className='btngroups'>
                <button className='btn' onClick={clear}>Clear</button>
                <button onClick={goback} className='btns'>Go Back</button>
            </div>
        </div>
    )
}

export default Cards