import React from 'react';
import "./navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import CartWidget from "../CartWidget/CartWidget"
import {Nav} from './nav/nav'
import {Link} from 'react-router-dom'

function navbar(){

    const categorias = [
        {id: 0, nombre: "New In", ruta:"/categoria/Newin"},
        {id: 1, nombre: "Hombre", ruta:"/categoria/Hombre"},
        {id: 2, nombre: "Mujer", ruta:"/categoria/Mujer"},
        {id: 3, nombre: "Zapatillas", ruta:"/categoria/Zapatillas"},
        {id: 4, nombre: "Marcas", ruta:"/categoria/Marcas"},
    ]

    return(
        <header style={style.container}>

            <Link to={"/"}>
                <h1>ShopTime</h1>
            </Link>

            <Nav categorias={categorias}/>
            
            <section>
                <Link to={"/cart"}>
                <CartWidget/>
                </Link>
                <PersonIcon fontSize="large"/>
            </section>
        </header>
    );
};

const style = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "saddlebrown",
    }
}

export default navbar;