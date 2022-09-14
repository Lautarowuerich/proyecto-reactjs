import React from 'react'
import '../ItemListContainer/itemListContainer.css'
import ItemCount from '../itemCount/ItemCount'

function itemListContainer(){
    return (
        <>
            <ItemCount stock={9} initial={1} />
        </>
    )
}

export default itemListContainer