import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age:36,
        }
    }

    render() {
        return (
            <div>
                <h1>Hola {this.props.nombre} </h1> 
                <h2> tu edad es {this.state.age}</h2>
                <div>
                    <button onClick={this.cumple}>
                        Incrementar Edad 
                    </button>
                </div>
            </div>
        )
    }

    cumple = () =>{
        this.setState ( (prevState) => (
            {
            age:prevState.age +1,
        }
        ))
    }
}

Greeting.propTypes = {
    nombre:PropTypes.string,
}

export default Greeting;
