import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContent (){

    const [producto, setProducto] = useState({})

    useEffect(()=>{
        fetch('../assets/data.json')
        .then((res)=>res.json())
        .then((json)=>{
            setProducto(json)
        })
    })

    return(
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContent