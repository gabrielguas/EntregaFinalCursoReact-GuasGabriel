import ItemCounter from "../../Counter/ItemCounter"

export const ItemDetail = ({ product }) => {
    const onAdd = (count) => {
        console.log('Productos seleccionados: ', count)
    }
    return (
        <div className="row">
            <h2>Vista de detalle</h2>
            <div className="col">
                <img className="w-25" src={product.imageUrl} alt="imagen producto" />
                <div>
                    <p>Descripcion: {product.description}</p>
                    <p>Precio: {product.price}</p>
                </div>
            </div>
            <div className="col">
                <ItemCounter initial={1} stock={10} onAdd={onAdd}/> 
            </div>
        </div>
    )
}
