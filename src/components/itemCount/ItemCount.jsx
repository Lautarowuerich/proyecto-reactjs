import { useState } from 'react';
import '../itemCount/itemCount.css'

function ItemCount({initial, stock}){


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
                    <button disabled={add === initial} onClick={removeProduct}>-</button>
                    <h4>{add}</h4>
                    <button disabled={add === stock} onClick={addProduct}>+</button>
                    <button className='carrito'>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount;