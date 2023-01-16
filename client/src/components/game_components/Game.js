import React, { Component } from 'react'
import { Grid, GridItem, Image, Button } from '@chakra-ui/react'

import classes from '../styles/game.module.css'
import Build from './Build'
import Draw from './Draw'
import Snark from './Snark'
import Mat from './Mat'

import table from "../../assets/table.png"

import club1 from "../../assets/clubs/club1.png"
import club2 from "../../assets/clubs/club2.png"
import club3 from "../../assets/clubs/club3.png"
import club4 from "../../assets/clubs/club4.png"
import club5 from "../../assets/clubs/club5.png"
import club6 from "../../assets/clubs/club6.png"
import club7 from "../../assets/clubs/club7.png"
import club8 from "../../assets/clubs/club8.png"
import club9 from "../../assets/clubs/club9.png"
import club10 from "../../assets/clubs/club10.png"
import club11 from "../../assets/clubs/club11.png"
import club12 from "../../assets/clubs/club12.png"
import club13 from "../../assets/clubs/club13.png"

import spade1 from "../../assets/spades/spade1.png"
import spade2 from "../../assets/spades/spade2.png"
import spade3 from "../../assets/spades/spade3.png"
import spade4 from "../../assets/spades/spade4.png"
import spade5 from "../../assets/spades/spade5.png"
import spade6 from "../../assets/spades/spade6.png"
import spade7 from "../../assets/spades/spade7.png"
import spade8 from "../../assets/spades/spade8.png"
import spade9 from "../../assets/spades/spade9.png"
import spade10 from "../../assets/spades/spade10.png"
import spade11 from "../../assets/spades/spade11.png"
import spade12 from "../../assets/spades/spade12.png"
import spade13 from "../../assets/spades/spade13.png"

import heart1 from "../../assets/hearts/heart1.png"
import heart2 from "../../assets/hearts/heart2.png"
import heart3 from "../../assets/hearts/heart3.png"
import heart4 from "../../assets/hearts/heart4.png"
import heart5 from "../../assets/hearts/heart5.png"
import heart6 from "../../assets/hearts/heart6.png"
import heart7 from "../../assets/hearts/heart7.png"
import heart8 from "../../assets/hearts/heart8.png"
import heart9 from "../../assets/hearts/heart9.png"
import heart10 from "../../assets/hearts/heart10.png"
import heart11 from "../../assets/hearts/heart11.png"
import heart12 from "../../assets/hearts/heart12.png"
import heart13 from "../../assets/hearts/heart13.png"

import diamond1 from "../../assets/diamonds/diamond1.png"
import diamond2 from "../../assets/diamonds/diamond2.png"
import diamond3 from "../../assets/diamonds/diamond3.png"
import diamond4 from "../../assets/diamonds/diamond4.png"
import diamond5 from "../../assets/diamonds/diamond5.png"
import diamond6 from "../../assets/diamonds/diamond6.png"
import diamond7 from "../../assets/diamonds/diamond7.png"
import diamond8 from "../../assets/diamonds/diamond8.png"
import diamond9 from "../../assets/diamonds/diamond9.png"
import diamond10 from "../../assets/diamonds/diamond10.png"
import diamond11 from "../../assets/diamonds/diamond11.png"
import diamond12 from "../../assets/diamonds/diamond12.png"
import diamond13 from "../../assets/diamonds/diamond13.png"

function snarkClickCard(card) {
    let state = new Game().state;

    var selectedCards = state.selected;
    if (selectedCards.length === 0) {
        state["selected"] = card;
        var list = state["snarkList"]
        console.log(list)
        var found = list.find(element => (this.identifyCard(element, card[0])))
            (console.log(found))
        this.setState(state);

    }

}

function identifyCard(card1, card2) {
    return (card1.suit === card2.suit && card1.number === card2.number)
}

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {

            snarkList: [],
            buildList_1: [],
            buildList_2: [],
            buildList_3: [],
            buildList_4: [],
            drawList: [],
            middleList: {},


            mounted: false,
            selected: []
        }
    };

    shuffle = () => {
        var sorted_deck = [
            { suit: "spades", number: "1", color: "black", faceUp: false, selected: false, sprite: spade1, deck: "", lastCard: false },
            { suit: "spades", number: "2", color: "black", faceUp: false, selected: false, sprite: spade2, deck: "", lastCard: false },
            { suit: "spades", number: "3", color: "black", faceUp: false, selected: false, sprite: spade3, deck: "", lastCard: false },
            { suit: "spades", number: "4", color: "black", faceUp: false, selected: false, sprite: spade4, deck: "", lastCard: false },
            { suit: "spades", number: "5", color: "black", faceUp: false, selected: false, sprite: spade5, deck: "", lastCard: false },
            { suit: "spades", number: "6", color: "black", faceUp: false, selected: false, sprite: spade6, deck: "", lastCard: false },
            { suit: "spades", number: "7", color: "black", faceUp: false, selected: false, sprite: spade7, deck: "", lastCard: false },
            { suit: "spades", number: "8", color: "black", faceUp: false, selected: false, sprite: spade8, deck: "", lastCard: false },
            { suit: "spades", number: "9", color: "black", faceUp: false, selected: false, sprite: spade9, deck: "", lastCard: false },
            { suit: "spades", number: "10", color: "black", faceUp: false, selected: false, sprite: spade10, deck: "", lastCard: false },
            { suit: "spades", number: "11", color: "black", faceUp: false, selected: false, sprite: spade11, deck: "", lastCard: false },
            { suit: "spades", number: "12", color: "black", faceUp: false, selected: false, sprite: spade12, deck: "", lastCard: false },
            { suit: "spades", number: "13", color: "black", faceUp: false, selected: false, sprite: spade13, deck: "", lastCard: false },

            { suit: "clubs", number: "1", color: "black", faceUp: false, selected: false, sprite: club1, deck: "", lastCard: false },
            { suit: "clubs", number: "2", color: "black", faceUp: false, selected: false, sprite: club2, deck: "", lastCard: false },
            { suit: "clubs", number: "3", color: "black", faceUp: false, selected: false, sprite: club3, deck: "", lastCard: false },
            { suit: "clubs", number: "4", color: "black", faceUp: false, selected: false, sprite: club4, deck: "", lastCard: false },
            { suit: "clubs", number: "5", color: "black", faceUp: false, selected: false, sprite: club5, deck: "", lastCard: false },
            { suit: "clubs", number: "6", color: "black", faceUp: false, selected: false, sprite: club6, deck: "", lastCard: false },
            { suit: "clubs", number: "7", color: "black", faceUp: false, selected: false, sprite: club7, deck: "", lastCard: false },
            { suit: "clubs", number: "8", color: "black", faceUp: false, selected: false, sprite: club8, deck: "", lastCard: false },
            { suit: "clubs", number: "9", color: "black", faceUp: false, selected: false, sprite: club9, deck: "", lastCard: false },
            { suit: "clubs", number: "10", color: "black", faceUp: false, selected: false, sprite: club10, deck: "", lastCard: false },
            { suit: "clubs", number: "11", color: "black", faceUp: false, selected: false, sprite: club11, deck: "", lastCard: false },
            { suit: "clubs", number: "12", color: "black", faceUp: false, selected: false, sprite: club12, deck: "", lastCard: false },
            { suit: "clubs", number: "13", color: "black", faceUp: false, selected: false, sprite: club13, deck: "", lastCard: false },

            { suit: "diamonds", number: "1", color: "red", faceUp: false, selected: false, sprite: diamond1, deck: "", lastCard: false },
            { suit: "diamonds", number: "2", color: "red", faceUp: false, selected: false, sprite: diamond2, deck: "", lastCard: false },
            { suit: "diamonds", number: "3", color: "red", faceUp: false, selected: false, sprite: diamond3, deck: "", lastCard: false },
            { suit: "diamonds", number: "4", color: "red", faceUp: false, selected: false, sprite: diamond4, deck: "", lastCard: false },
            { suit: "diamonds", number: "5", color: "red", faceUp: false, selected: false, sprite: diamond5, deck: "", lastCard: false },
            { suit: "diamonds", number: "6", color: "red", faceUp: false, selected: false, sprite: diamond6, deck: "", lastCard: false },
            { suit: "diamonds", number: "7", color: "red", faceUp: false, selected: false, sprite: diamond7, deck: "", lastCard: false },
            { suit: "diamonds", number: "8", color: "red", faceUp: false, selected: false, sprite: diamond8, deck: "", lastCard: false },
            { suit: "diamonds", number: "9", color: "red", faceUp: false, selected: false, sprite: diamond9, deck: "", lastCard: false },
            { suit: "diamonds", number: "10", color: "red", faceUp: false, selected: false, sprite: diamond10, deck: "", lastCard: false },
            { suit: "diamonds", number: "11", color: "red", faceUp: false, selected: false, sprite: diamond11, deck: "", lastCard: false },
            { suit: "diamonds", number: "12", color: "red", faceUp: false, selected: false, sprite: diamond12, deck: "", lastCard: false },
            { suit: "diamonds", number: "13", color: "red", faceUp: false, selected: false, sprite: diamond13, deck: "", lastCard: false },

            { suit: "hearts", number: "1", color: "red", faceUp: false, selected: false, sprite: heart1, deck: "", lastCard: false },
            { suit: "hearts", number: "2", color: "red", faceUp: false, selected: false, sprite: heart2, deck: "", lastCard: false },
            { suit: "hearts", number: "3", color: "red", faceUp: false, selected: false, sprite: heart3, deck: "", lastCard: false },
            { suit: "hearts", number: "4", color: "red", faceUp: false, selected: false, sprite: heart4, deck: "", lastCard: false },
            { suit: "hearts", number: "5", color: "red", faceUp: false, selected: false, sprite: heart5, deck: "", lastCard: false },
            { suit: "hearts", number: "6", color: "red", faceUp: false, selected: false, sprite: heart6, deck: "", lastCard: false },
            { suit: "hearts", number: "7", color: "red", faceUp: false, selected: false, sprite: heart7, deck: "", lastCard: false },
            { suit: "hearts", number: "8", color: "red", faceUp: false, selected: false, sprite: heart8, deck: "", lastCard: false },
            { suit: "hearts", number: "9", color: "red", faceUp: false, selected: false, sprite: heart9, deck: "", lastCard: false },
            { suit: "hearts", number: "10", color: "red", faceUp: false, selected: false, sprite: heart10, deck: "", lastCard: false },
            { suit: "hearts", number: "11", color: "red", faceUp: false, selected: false, sprite: heart11, deck: "", lastCard: false },
            { suit: "hearts", number: "12", color: "red", faceUp: false, selected: false, sprite: heart12, deck: "", lastCard: false },
            { suit: "hearts", number: "13", color: "red", faceUp: false, selected: false, sprite: heart13, deck: "", lastCard: false },
        ];

        sorted_deck.sort(() => (Math.random() > .5) ? 1 : -1);

        let state = this.state
        state["buildList_1"] = sorted_deck.slice(0, 1);
        state["buildList_2"] = sorted_deck.slice(1, 3);
        state["buildList_3"] = sorted_deck.slice(3, 6);
        state["buildList_4"] = sorted_deck.slice(6, 10);
        state["snarkList"] = sorted_deck.slice(10, 20);
        state["drawList"] = sorted_deck.slice(20);


        this.setState(state);
    }

    componentDidMount() {
        let state = this.state;
        if (state.mounted) {
            this.shuffle();
        }
        state["mounted"] = true;
        this.setState(state);
    }



    /* snarkClickCard = (card) => {
        let state = this.state;

        var selectedCards = state.selected;
        if (selectedCards.length === 0) {
            state["selected"] = card;
            var list = state["snarkList"]
            console.log(list)
            var found = list.find(element => (this.identifyCard(element, card[0])))
                (console.log(found))
            this.setState(state);

        }

    } */

    drawClickCard = (card) => {
        let state = this.state
        var selectedCards = this.state.selected
        if (selectedCards.length === 0) {
            state["selected"] = card
            card.selected = true
        }

    }

    buildClickCard = () => {
        var selectedCards = this.state.selected
        if (selectedCards.length === 0) {

        } else {

        }
    }

    middleClickCard = (card) => {
        var selectedCards = this.state.selected
        if (selectedCards.length === 0) {
            return
        } else {

        }
    }


    render() {


        return (
            <div className={classes.game_page} >
                <Image
                    src={table}
                    width="100.2%"
                    z-zIndex={0}
                    position="absolute"
                /* marginTop="-10px"
                marginLeft="-10px"
                marginBottom="-10px" */
                />


                <div className={classes.table_elements}>
                    <Grid
                        templateColumns='repeat(7, 1fr)'
                        gap={0}
                    >
                        <GridItem colSpan={1} >

                            <Button
                                colorScheme="red"
                                size="md"
                                variant="outline"
                                marginLeft="30px"
                                marginTop="30px"
                            >
                                Menu
                            </Button>

                            <Button
                                colorScheme="red"
                                size="md"
                                variant="outline"
                                marginLeft="30px"
                                marginTop="30px"
                            >
                                Snark Rules
                            </Button>


                        </GridItem>

                        <GridItem colSpan={5}>
                            <Mat />


                            <Grid
                                templateColumns='repeat(7, 1fr)'
                                gap={0}
                            >
                                <GridItem colSpan={1}>
                                    <Snark
                                        snarkList={this.state.snarkList}
                                        clickCard={snarkClickCard}
                                    />
                                </GridItem>

                                <GridItem colSpan={3}>
                                    <Grid
                                        templateColumns='repeat(4, 1fr)'
                                        gap={0}
                                    >
                                        <GridItem>
                                            <Build buildList={this.state.buildList_1} />
                                        </GridItem>

                                        <GridItem>
                                            <Build buildList={this.state.buildList_2} />
                                        </GridItem>

                                        <GridItem>
                                            <Build buildList={this.state.buildList_3} />
                                        </GridItem>

                                        <GridItem>
                                            <Build buildList={this.state.buildList_4} />
                                        </GridItem>

                                    </Grid>
                                </GridItem>

                                <GridItem colSpan={3}>
                                    <Draw
                                        drawList={this.state.drawList}
                                        clickCard={this.drawClickCard}
                                    />
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem colSpan={1} />
                    </Grid>


                </div>
            </div>
        )
    };
}
