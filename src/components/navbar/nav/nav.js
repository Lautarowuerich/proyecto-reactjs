import React from "react";
import {Link, NavLink} from 'react-router-dom'

export const Nav = ({categorias}) => {
    return(
        <nav>
            {categorias.map((categorias) => {
                return <Link key={categorias.id} style={styles.links} to={categorias.ruta}>{categorias.nombre}</Link>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}