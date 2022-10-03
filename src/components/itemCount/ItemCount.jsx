import { useState } from 'react';
import '../itemCount/itemCount.css'

function ItemCount({initial, stock, onAdd}){


    const [add, setAdd] = useState(initial)

    function addProduct(){
        setAdd(add + 1)
    }

    function removeProduct(){
        setAdd(add - 1)
    }

    return(
        <>
            <div className='contenedor'>
                <button className='carrito' disabled={add === initial} onClick={removeProduct}>-</button>
                <h4>{add}</h4>
                <button className='carrito' disabled={add === stock} onClick={addProduct}>+</button> 
            </div>
            <button onClick={()=>onAdd(add)} className='agregarCarrito btn btn-dark'>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;