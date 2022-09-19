import Item from '../item/item'


function ItemList({listProducts}){

    return(
        <>
            {listProducts.map((prod, i) => <Item key={`${prod.product}-${i}`} product={prod} />)}
        </>
    )
}

export default ItemList