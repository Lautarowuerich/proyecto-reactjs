import React from 'react';
import "./navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

function navbar(){
    return(
        <header>
            <h1>ShopTime</h1>
            <nav className='navbar'>
                <ul className='menu'>
                    <li>
                        <a href=''>New In</a>
                    </li>
                    <li>
                        <a href=''>Hombre</a>
                    </li>
                    <li>
                        <a href=''>Mujer</a>
                    </li>
                    <li>
                        <a href=''>Zapatillas</a>
                    </li>
                    <li>
                        <a href=''>Marcas</a>
                    </li>
                </ul>
            </nav>
            
            <section>
                <ShoppingCartIcon fontSize="large"/>
                <PersonIcon fontSize="large"/>
            </section>
        </header>
    );
};

export default navbar;