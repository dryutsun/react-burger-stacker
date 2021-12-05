import React, { useState } from 'react'

export default function ClearBurgerStack (props) {
        return(
            <button className="clearButton" onClick={(e) => props.clearBurgerStack(e)}>
            Clear Burger Stacks
            </button>
        )

}