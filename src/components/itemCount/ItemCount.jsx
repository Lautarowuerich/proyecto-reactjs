import { useState } from 'react';
import '../itemCount/itemCount.css'

function ItemCount(initial, stock, onAdd){


    const [add, setAdd] = useState(initial)

    const addProduct = () => add < stock && setAdd(add + 1);
    
    const removeProduct = () => add > initial && setAdd(add - 1)

    return(
        <div className='contenedor'>
            <button disabled={add === initial} onClick={removeProduct}>-</button>
            <h4>{add}</h4>
            <button disabled={add === stock} onClick={addProduct}>+</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;