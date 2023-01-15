import React from 'react'
import classes from '../styles/game.module.css'
import { Image } from '@chakra-ui/react'

function Card(props) {
    return (
        <div onClick={() => { console.log(props) }}>
            <Image
                src={props.sprite}
                height="200px"
                width="130px"
                border="2px solid white"
                borderRadius={15}
            />

        </div>
    )
}

export default Card