import { Link } from 'react-router-dom';
import './imagehover.min.css';
import './cards.css';

export default function Cards({ title, price, image, idProd }) {
    return (
        <div className='col-md-4 mb-4'>
            <figure className="card imghvr-zoom-out-flip-vert">
                <img className="cards__img__estilos" src={image} alt={title} />
                <figcaption className="card-body">
                    <h4 className='card-title h1'>{title}</h4>
                    <p className='card-text price h3'>${price}</p>
                    <button className="btn btn-cards">
                        <Link to={`/item/${idProd}`} ></Link>Ver Detalles
                    </button>

                </figcaption>
            </figure>
        </div>
    );
}
