import './Card.css'

const Card = (props) => {

    const {id, img, tipo, precio} = props
    
    return (
        <div className="card" key={id}>
            <img className="card-img" src={img} alt={tipo} />
            <h2>{tipo}</h2>
            <h4>{precio}</h4>

        </div>
    )
}

export default Card