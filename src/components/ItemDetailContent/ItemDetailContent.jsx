import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContent = ()=> {

    const [producto, setproducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getItem = async() =>{ 
        try{
            const responseApi = await fetch('http://localhost:5000/json/15');
            const responseParse = await responseApi.json();
            setproducto(responseParse);
            }

        catch(err){
            console.error(err);
            }

        finally{
            setLoading(false);
            }        
        }

        getItem();

        }, []);

        return(
            <>
                {loading ?
                <Box sx={{ display: 'flex'}}>
                <CircularProgress />
                </Box>
                :
                <ItemDetail producto={producto} />
                }
            </>
        )   
    
}

export default ItemDetailContent