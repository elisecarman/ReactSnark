import React from 'react'
import Card from './Card'

function Middle(props) {

    return (
        <div>
            Middle

            {(props.middleList).map((item, index) => (
                <Card
                    suit={item.suit}
                    number={item.number}
                    color={item.color}
                    faceUp={item.faceUp}
                    selected={item.selected}
                    sprite={item.sprite}
                />
            ))}

        </div>
    )
}

export default Middle