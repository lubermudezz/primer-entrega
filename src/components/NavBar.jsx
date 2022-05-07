import React from "react"
import {Link} from "react-router-dom"
import CartWidget from "./CartWidget"

export const NavBar = () => {
    return (
        <div>
            <CartWidget/>
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
            <li>Galería</li>
            <li>Categorías <select>
            <option value="XL">TAMAÑO XL</option>    
            <option value="XXL">TAMAÑO XXL</option>
            <option value="L">TAMAÑO L</option>
            </select></li>
          
            
        </div>
    )
}