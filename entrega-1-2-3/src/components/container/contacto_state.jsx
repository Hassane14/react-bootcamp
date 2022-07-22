import React, { useState } from 'react'
import { Contacto } from '../../models/contacto,class';
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = () => {

    const defaultContact = new Contacto('nombre ejemplo', 'apellido ejemplo', 'ejemplo@ejemplo.com', true)


    const [conectado, setConectado] = useState(false);

    function cambiarEstado() {
        console.log('TODO: Cambiar estado de la persona');
        setConectado(!conectado);
    };


    return (
        <div>
            <div>
                Datos de la Persona:
            </div>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
            <button onClick={cambiarEstado} >
                Cambiar estado a En Linea
            </button>

        </div>
    )
}

export default ContactoListComponent
