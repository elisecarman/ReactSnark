import React from 'react'
import Card from './Card'
import { Grid, GridItem, Image } from '@chakra-ui/react'
import back from "../../assets/back.png"

function Draw(props) {
    return (
        <div >
            <Grid
                templateColumns='repeat(5, 1fr)'
                gap={1}
            >
                <GridItem />
                <GridItem>
                    <Image
                        src={back}
                        height="200px"
                        width="130px"
                    />
                </GridItem>
                <GridItem />
                <GridItem>
                    {/*  <Card
                        suit={props.drawList[0].suite}
                        number={props.drawList[0].number}
                        color={props.drawList[0].color}
                        faceUp={props.drawList[0].faceUp}
                        selected={props.drawList[0].selected}
                        sprite={props.drawList[0].sprite}

                    /> */}
                </GridItem>
                <GridItem />

            </Grid>
        </div>
    )
}

export default Draw