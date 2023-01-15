import React from 'react'
import Card from './Card'

function Build(props) {
    return (
        <div>
            {props.buildList.map((card) => (
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

export default Build