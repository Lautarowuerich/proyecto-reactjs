import React from 'react'
import '../item/item.css'


function Item ({product}){
    
    return(
        <>  
            <div className='contenedorProductos'>
               <div className='contenedor'>
                  <div className='productos'>
                     <img className='imagen_productos' src={product.image} alt="" />
                     <h3 className='detalle_producto'>{product.product}</h3>
                     <p className='precio_producto'>{product.precio}</p>
                     <button className='btn btn-dark'>Más detalles</button>
                  </div>
               </div>
            </div>
        </>
    );
};

export default Item