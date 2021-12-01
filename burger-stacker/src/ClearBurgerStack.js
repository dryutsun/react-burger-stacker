import React, {Component} from 'react'

export default class ClearBurger extends Component {
    render(){
        return(
            <button className="clearButton" onClick={(e) => this.props.clearBurgerStack(e)}>
            Clear Burger Stacks
            </button>
        )
    }
}