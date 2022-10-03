import React,{useState} from "react";
import '../ItemDetail/ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import { Add } from "@mui/icons-material";

const ItemDetail = ({producto}) => {

   const [add, setAdd] = useState (0)
   
   function onAdd (add) {
        Swal.fire({
            text: `Agregaste ${add} productos al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        
        setAdd (Add)
    }


    return(
        <>  
            <div className='contenedorProductosDetail'>
                <div className="descripcionCard">
                    <img className='imagen_productos' src={producto.image} alt="" />
                    <p className="descripcion_producto">{producto.descripcion}</p>
                </div>
                <h3 className='detalle_producto'>{producto.product}</h3>
                <p className='precio_detalle'>${producto.precio}</p>
                {add > 0 ? <Link to={"/cart"}><button>Finalizar compra</button></Link> : <ItemCount initial={1} onAdd = {onAdd} />}
            </div>
        </>
    );
};



export default ItemDetail;