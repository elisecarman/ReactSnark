import React from 'react'
import classes from '../styles/game.module.css'

function Card(props) {
    return (
        <div className={classes.card} onClick={props.onClick}>
            {props.suit}
            <br></br>
            {props.number}
        </div>
    )
}

export default Card