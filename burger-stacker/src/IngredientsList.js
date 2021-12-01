import React, {Component} from 'react'
import IngredientUnit from './IngredientUnit'

export default class IngredientsList extends Component {
    render() {
        
        let ingredientComponentGenerator = this.props.ingredients.map((unit, index)=>{
            return <li onClick={(e) => this.props.addIngredient(e)}> 
                <IngredientUnit
                name={unit.name}
                color={unit.color}
                />  
            </li>
        })

        return(
        <div className="container">
            <ul>
                {ingredientComponentGenerator}
            </ul>
        </div>
        )
    }
}