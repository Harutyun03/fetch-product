import './Header.css'


function Header({item, addCard}){

    const handleCard = (item) => {
            addCard(item)
    }
    return(
        <div className="list">
            <p>{item.title}</p>
            <img src={item.image} />
            <p>{item.price}$</p>
            <button className='btn' onClick={() => handleCard(item)}>Buy</button>
        </div>
    )
}

export default Header