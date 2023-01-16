import React, { Component } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Middle from './Middle'

export default class Mat extends Component {
    render() {
        return (
            <div>
                <div style={{ height: "30px" }} />
                <Grid
                    templateColumns='repeat(8, 1fr)'
                    gap={1}
                >
                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>
                </Grid>
                <div style={{ height: "30px" }} />
                <Grid
                    templateColumns='repeat(8, 1fr)'
                    gap={1}
                >
                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                    <GridItem>
                        < Middle middleList={[]} />
                    </GridItem>

                </Grid>
                <div style={{ height: "30px" }} />
            </div>
        )
    }
}
