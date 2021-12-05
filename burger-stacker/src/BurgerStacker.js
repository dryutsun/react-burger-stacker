import React, {Component} from 'react'
import IngredientUnit from './IngredientUnit'

export default function BurgerStacker (props) {

let burgerDisplay = props.selectedIngredients.map((unit)=>{
    return <li>
            <IngredientUnit name={unit.name} color={unit.color} />
            </li>
    })

    return(
        <ul>
            {burgerDisplay.reverse()}
        </ul>
    )
}