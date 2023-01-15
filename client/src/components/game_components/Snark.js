import React from 'react'
import Card from './Card'
import { Image } from '@chakra-ui/react'
import back from "../../assets/back.png"

function Snark(props) {
    return (
        <div>

            <Image
                src={back}
                height="200px"
                width="130px"
            />
            <div style={{ marginTop: "-160px" }}>
                {/* <Card
                    suit={props.snarkList[0].suit}
                    number={props.snarkList[0].number}
                    color={props.snarkList[0].color}
                    faceUp={props.snarkList[0].faceUp}
                    selected={props.snarkList[0].selected}
                    sprite={props.snarkList[0].sprite}
                    clickCard={props.clickCard}
                /> */}
            </div>
        </div>
    )
}

export default Snark