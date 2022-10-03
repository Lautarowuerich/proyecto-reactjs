import React, { useEffect, useState } from 'react'
import '../ItemListContainer/itemListContainer.css'
import ItemList from '../itemList/itemList'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom' 

function ItemListContainer(){

    let {IdCategoria} = useParams()

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // const URL_BASE = 'http://localhost:5000/json'
    // const URL_CATEGORY = 'http://localhost:5000/json/categoria'

    useEffect(()=>{
        fetch(`http://localhost:5000/json`)
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