import React, { useEffect, useState } from 'react'
import '../ItemListContainer/itemListContainer.css'
import ItemCount from '../itemCount/ItemCount'
import ItemList from '../itemList/itemList'
import {products} from '../../assets/productos'
import {customFetch} from '../../fetch/fetch'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ItemListContainer(){

    const [listProducts, setListProducts] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect (() => {
        customFetch(products)
            .then(res =>{
                setLoading(false)
                setListProducts(res)
            })
    }, [])


    return (
        <>
            <ItemCount stock={9} initial={1} />
            {loading ?
            <Box sx={{ display: 'flex'}}>
            <CircularProgress />
            </Box>
            :
            <ItemList listProducts={listProducts} />
            }
        </>
    )  
}

export default ItemListContainer