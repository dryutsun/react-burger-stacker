import React, {Component} from 'react'
import BurgerStacker from './BurgerStacker'
import ClearBurgerStack from './ClearBurgerStack'


export default function BurgerContainer (props) {
        return(
            <div className="container">
                <BurgerStacker selectedIngredients={props.selectedIngredients}/>
                <ClearBurgerStack clearBurgerStack={props.clearBurgerStack} />
            </div>
        )
    }
