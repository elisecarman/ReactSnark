import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Grid, GridItem, Image } from '@chakra-ui/react'
import back from "../../assets/back.png"
import classes from "../styles/game.module.css"



function Draw(props) {


    const [drawnList, setDrawnList] = useState([]);
    const [index, setIndex] = useState(0);

    function draw_card() {

        if (index === props.drawList.length) {
            setDrawnList([]);
            setIndex(0);
        }
        else {

            var shift = 3
            if (props.drawList.length - index < 3) {
                shift = props.drawList.length - index;
            }

            for (let i = 0; i < shift; i += 1) {
                setDrawnList((drawnList) => [...drawnList,
                props.drawList[index + i]]);
            }

            setIndex(index + shift);
        }

    }

    useEffect(() => {
        setDrawnList(...drawnList, [])

    }, [])


    return (
        <div >
            <Grid
                templateColumns='repeat(5, 1fr)'
                gap={1}
            >
                <GridItem />
                <GridItem>
                    <div onClick={() => { draw_card() }}>
                        <Image
                            src={back}
                            height="140px"
                            width="90px"
                        />
                    </div>
                </GridItem>
                <GridItem />
                <GridItem>
                    {index === 0 ?

                        <div className={classes.placeholder} />
                        :
                        <Card
                            suit={drawnList[index - 1].suit}
                            number={drawnList[index - 1].number}
                            color={drawnList[index - 1].color}
                            faceUp={true}
                            selected={drawnList[index - 1].selected}
                            sprite={drawnList[index - 1].sprite}

                        />


                    }


                </GridItem>
                <GridItem />

            </Grid>
        </div>
    )
}

export default Draw