import React from 'react'
import Card from './Card'

function Build(props) {
    return (
        <div style={{ marginTop: "110px" }}>
            {props.buildList.map((card, index) => (

                index < (props.buildList.length - 1) ?
                    <div style={{ marginTop: "-110px" }}>
                        <Card
                            suit={card.suit}
                            number={card.number}
                            color={card.color}
                            faceUp={false}
                            selected={card.selected}
                            sprite={card.sprite}
                        />

                    </div>

                    :

                    <div style={{ marginTop: "-110px" }}>
                        <Card
                            suit={card.suit}
                            number={card.number}
                            color={card.color}
                            faceUp={true}
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