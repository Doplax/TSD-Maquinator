/*
FUNCION:
    Rellenar cada casilla de la tabla en funcion de la informacion que llege de "prop"
    La informacion se recive del objeto Data que se encuentra en App
*/
import React from "react";
import './Machinebox.css'

export default function Machinebox(prop){
    
    if (prop.nombre === "-") {
        return (
            <> - </>
        )

    } else {
        if (prop.foto === undefined) {
            return (
                <div>
                    <div>
                    Ø {prop.nombre}  
                    </div>
                </div> )


        } else {
            return (
                <div className="Machinebox_div">
                    <div className="tooltip">{prop.nombre}
                        <figure className="tooltiptext">
                            <img  alt="imagen" src={require(`./img/${prop.foto}.png`)}></img>
                        </figure>
                    </div>
                </div>
       )}
}}





// export {Machinebox};