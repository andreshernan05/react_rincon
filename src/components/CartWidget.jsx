import './CartWidget.css'

export default function CartWidget() {
    return (<>
        <div className="d-flex align-items-center ms-auto carrito_estilo ">
            <img className="input-group imgCarrito " src="/carrito.png" alt="Carrito de Compras" />
            <span className="input-group-text sp_contador">5</span>
        </div>

    </>)
}