import React from 'react'
import Card from './Card'

function Draw(props) {
    return (
        <div>
            {props.drawList.map((card) => (
                <Card
                    suit={card.suit}
                    number={card.number}
                    color={card.color}
                    faceUp={card.faceUp}
                    selected={card.selected}
                    sprite={card.sprite}
                />
            ))}
        </div>
    )
}

export default Draw