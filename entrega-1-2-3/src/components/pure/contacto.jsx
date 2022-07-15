import React from 'react'
import PropTypes from 'prop-types'

const ContactoComponent = ({contacto}) =>{
    return (
        <div>
            <h2>
                Nombre:  {contacto.nombre}
            </h2>
            <h3>
                Apellido: {contacto.apellido}
            </h3>
            <h3>
                Email: {contacto.email}
            </h3>
            <h5>
                Contacto: {contacto.conectado ? 'En Línea' : 'No Disponible'}
            </h5>
        </div>
    )
}

ContactoComponent.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool,


}

export default ContactoComponent

