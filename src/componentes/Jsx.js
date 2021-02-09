import React, {useState, Fragment} from 'react';

const ComponenteUno = () => {

    const [numero, setnumero] = useState(90);

    return (
        <Fragment>
            <h2>Soy el Componente 1 y uso un If</h2>
            <h3>
                {
                    numero >= 10 ? "Es Mayor o Igual 10" : "Es Menor que 10"
                }
            </h3>
        </Fragment> 
     );
}
 
export default ComponenteUno;