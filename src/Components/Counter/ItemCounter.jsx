import { useState } from "react"

const ItemCounter = ({ initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial)
    const handleAdd = () =>{
        if (counter < stock){
            setCounter(counter+1)
        }
    }

    const handleSub = () => {
        if (counter > initial){
            setCounter(counter-1)
        }
    }

    const handleOnAdd = () => {
        onAdd(counter)
    }

  return (
    <center>
        <h2>Contador</h2>
        <button onClick={handleAdd}> +1 </button>
        <label>
            <strong> { counter } </strong>
        </label>
        <button onClick={handleSub}> -1 </button>
        <button onClick={handleOnAdd}>Agregar al carrito</button>
    </center>
  )
}

export default ItemCounter