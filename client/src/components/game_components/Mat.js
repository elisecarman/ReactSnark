import React, { Component } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Middle from './Middle'

export default class Mat extends Component {
    render() {
        return (
            <div>
                <Grid
                    templateColumns='repeat(4, 1fr)'
                    gap={6}
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

                </Grid>
                <Grid
                    templateColumns='repeat(4, 1fr)'
                    gap={6}
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

                </Grid>
                <Grid
                    templateColumns='repeat(4, 1fr)'
                    gap={6}
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

                </Grid>

                <Grid
                    templateColumns='repeat(4, 1fr)'
                    gap={6}
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

                </Grid>
            </div>
        )
    }
}
