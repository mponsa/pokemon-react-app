import React, { Component } from 'react';
import Axios from 'axios';


class pokemon extends Component{
    
    
    
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        Axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.nombre)
            .then(response => {
               this.setState(response.data);
                console.log(pokemon.name);
            })
    }
    
    
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.weight}</p>
            </div>
        );
    }
}
export default pokemon;