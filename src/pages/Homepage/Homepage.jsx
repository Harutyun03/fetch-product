import Header from "../../components/Header/Header"
import './Homepage.css'

function Homepage({product, addCard}){
    return(
        <div>
            <div className="box">
                {
                    product.map((item) => {
                    return <Header key={item.id} item={item} addCard={addCard}/>
                    })
                }
            </div>
        </div>
    )
}

export default Homepage