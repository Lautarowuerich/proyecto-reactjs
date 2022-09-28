import React, { useEffect, useState } from 'react'
import '../ItemListContainer/itemListContainer.css'
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/itemList'
import {products} from '../../assets/productos'
import {customFetch} from '../../util/fetch'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom' 

function ItemListContainer(){

    let {IdCategoria} = useParams()

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const URL_BASE = 'http://localhost:5000/json'
    const URL_CATEGORY = 'http://localhost:5000/json/categorias/'

    useEffect(()=>{
        fetch(`${URL_CATEGORY}${IdCategoria}`)
        .then((res) => res.json())
        .then((json)=>{
            setListProducts(json)
        })
        .finally(() =>{
            setLoading(false)
        })
    },[IdCategoria])

    return (
        <>
            <div className='contenedorCards'>
                <ItemCount stock={9} initial={1} />
                {loading ?
                <Box sx={{ display: 'flex'}}>
                <CircularProgress />
                </Box>
                :
                <ItemList listProducts={listProducts} />
            }
            </div>
        </>
    )  
}

export default ItemListContainer