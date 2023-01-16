import React from 'react'
import Card from './Card'
import { Image } from '@chakra-ui/react'
import back from "../../assets/back.png"

function Snark(props) {
    return (
        <div>

            <Image
                src={back}
                height="140px"
                width="90px"
            />

            <div style={{ marginTop: "-110px" }}>
                {props.snarkList.length === 0 ?
                    <div></div>
                    :
                    <div onClick={
                        () => { props.clickCard([props.snarkList[0]]) }

                    }>
                        <Card
                            suit={props.snarkList[0].suit}
                            number={props.snarkList[0].number}
                            color={props.snarkList[0].color}
                            faceUp={true}
                            selected={props.snarkList[0].selected}
                            sprite={props.snarkList[0].sprite}
                            clickCard={props.clickCard}
                        />
                    </div>

                }
            </div>
        </div>
    )
}

export default Snark