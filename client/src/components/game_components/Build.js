import React from 'react'
import Card from './Card'

function Build(props) {
    return (
        <div style={{ marginTop: "160px" }}>
            {props.buildList.map((card, index) => (
                <div style={{ marginTop: "-160px" }}>
                    <Card
                        suit={card.suit}
                        number={card.number}
                        color={card.color}
                        faceUp={card.faceUp}
                        selected={card.selected}
                        sprite={card.sprite}
                    />
                </div>
            ))
            }
        </div >
    )
}

export default Build