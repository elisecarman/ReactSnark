import React from 'react'
import Card from './Card'

function Snark(props) {
    return (
        <div>
            {props.snarkList.map((card) => (
                <Card
                    suit={card.suit}
                    number={card.number}
                    color={card.color}
                    faceUp={card.faceUp}
                    selected={card.selected}
                    sprite={card.sprite}
                    clickCard={props.clickCard}
                />
            ))}
        </div>
    )
}

export default Snark