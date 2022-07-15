import React, {useState } from 'react'
import { Contact } from '../../models/contact,class';
import ContactoComponent from '../pure/contacto';

const ContactoListComponent = () => {

    const defaultContact = new Contact('nombre ejemplo', 'apellido ejemplo', 'ejemplo@ejemplo.com', true)

    
    const [conectado, setEstado] = useState(false);

    const cambiarEstado = (id) => {
        console.log('TODO: Cambiar estado de la persona')
        setEstado(conectado => !conectado);
    };

    return (
        <div>
            <div>
                Datos de la Persona:
            </div>
            <ContactoComponent contacto={defaultContact}></ContactoComponent>
            <div>
                <button onClick={cambiarEstado} >
                    Cambiar estado a En Linea
                </button>
            </div>
        </div>
    )
}

export default ContactoListComponent
