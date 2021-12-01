import React, {Component} from 'react'
import IngredientsList from './IngredientsList'

export default class IngredientUnit extends Component {
    render(){
        return(
            <p style={{backgroundColor: this.props.color}}>
                {this.props.name}
            </p>

        )
    }
}