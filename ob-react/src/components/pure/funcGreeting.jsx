import React, {useState} from 'react'
import PropTypes from 'prop-types'

const FuncGreeting = (props) => {

const [age, setage] = useState(36)

const cumple = () =>{
    setage(age +1)
}
    return (
        <div>
            <h1>Hola {props.nombre} desde componente funcional, que usa funcion caraho! </h1>
           <h2> tu edad es {age}</h2>
            <div>
                <button onClick={cumple}>
                    Incrementar Edad
                </button>
            </div>
        </div>
    )
}

FuncGreeting.propTypes = {
    nombre: PropTypes.string,
}

export default FuncGreeting
