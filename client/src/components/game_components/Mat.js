import React, { Component } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Middle from './Middle'

export default class Mat extends Component {
    render() {
        return (
            <div>
                <Grid
                    templateColumns='repeat(6, 1fr)'
                    templateRows='repeat(4, 1fr)'
                    gap={6}
                >
                    <GridItem />
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
                    <GridItem />

                    <GridItem />
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
                    <GridItem />

                    <GridItem />
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
                    <GridItem />

                    <GridItem />
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
                    <GridItem />


                </Grid>

            </div>
        )
    }
}
