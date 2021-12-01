import React, {Component} from 'react'
import IngredientsList from './IngredientsList'
import IngredientUnit from './IngredientUnit'

export default class BurgerStacker extends Component {
    render(){
        let burgerDisplay = this.props.selectedIngredients.reverse().map((unit)=>{
            return <li>
                <IngredientUnit name={unit.name} color={unit.color} />
            </li>
        })
        return(
            <ul>
                {burgerDisplay}
            </ul>
        )
    }
}