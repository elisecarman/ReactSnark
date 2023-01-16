import React from 'react'
import classes from '../styles/game.module.css'
import { Image } from '@chakra-ui/react'
import back from "../../assets/back.png"

function Card(props) {
    return (
        props.faceUp ?
            <div>
                {props.selected ?
                    <div > {/* onClick={() => { console.log(props) }} */}
                        <Image
                            src={props.sprite}
                            height="140px"
                            width="90px"
                            border="2px dotted white"
                            borderRadius={15}
                        />

                    </div>
                    :
                    <div> {/* onClick={() => { console.log(props) }} */}
                        <Image
                            src={props.sprite}
                            height="140px"
                            width="90px"
                            border="2px solid white"
                            borderRadius={15}
                        />

                    </div>}
            </div>
            :

            <div>
                <Image
                    src={back}
                    height="140px"
                    width="90px"
                    border="2px solid white"
                    borderRadius={15}
                />

            </div>
    )
}

export default Card