import React, {useState, Fragment} from 'react';

const MiArreglo = () => {

    const [miColeccion, setMiColeccion] = useState([1,2,3]);

    const [numero, setnumero] = useState(4);

    const agregar = () => {
        setnumero(numero + 1)
        //numero = numero + 1 error probar 
        setMiColeccion(
            [
                ...miColeccion, numero
            ]
        )
    }

    return ( 
        <Fragment>
            <h2>Hola soy un componente con un arreglo</h2>
            <h3>Contenido del arreglo</h3>
            <button onClick={agregar}>Agrega numero</button>
            <p>
                {
                    miColeccion.map(
                        (item) => <p>{item}</p>
                    )
                }
            </p>
        </Fragment>
     );
}
 
export default MiArreglo;