import React, {Component} from 'react'
import BurgerStacker from './BurgerStacker'
import ClearBurgerStack from './ClearBurgerStack'


export default class BurgerContainer extends Component {
    render() {
        return(
            <div className="container">
                <BurgerStacker selectedIngredients={this.props.selectedIngredients}/>
                <ClearBurgerStack clearBurgerStack={this.props.clearBurgerStack} />
            </div>
        )
    }



}