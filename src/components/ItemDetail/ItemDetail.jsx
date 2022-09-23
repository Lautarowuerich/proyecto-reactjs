import React from "react";
import '../ItemDetail/ItemDetail.css'

// const ItemDetail = ({producto}) => {
//     return(
//         <>
//             <h3>Producto: {producto.title}</h3>
//             <p>Descripción: {producto.description}</p>
//             <img className="productImage" src={producto.image}></img>
//             <p>Precio: {producto.price}</p>
//         </>
//     )
// }

const ItemDetail = ({producto}) => {
    return(
        <>  
            <div className='contenedorProductos'>
                <div className="descripcionCard">
                    <img className='imagen_productos' src={producto.image} alt="" />
                    <p className="descripcion_producto">{producto.descripcion}</p>
                </div>
                <h3 className='detalle_producto'>{producto.product}</h3>
                <p className='precio_producto'>${producto.precio}</p>
                <button className='btn btn-dark'>Agregar al carrito</button>
            </div>
        </>
    );
};



export default ItemDetail;