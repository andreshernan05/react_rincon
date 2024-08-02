import './ButtonComponent.css';

export default function ButtonComponent ({nombre}){

    const handleClick = () => {
        alert( `Prueba del boton ${nombre}`)
    }

    return(<>
    <div>
    <button className="btn btn-primary btn-custom btn-estilos" onClick={handleClick}>
        {nombre}
    </button>
    </div>

    
    
    </>)
}