import React, { Component } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

import classes from '../styles/game.module.css'
import Build from './Build'
import Draw from './Draw'
import Snark from './Snark'
import Mat from './Mat'



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
            { suit: "spades", number: "1", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "2", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "3", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "4", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "5", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "6", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "7", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "8", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "9", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "10", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "11", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "12", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "spades", number: "13", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },

            { suit: "clubs", number: "1", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "2", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "3", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "4", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "5", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "6", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "7", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "8", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "9", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "10", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "11", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "12", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "clubs", number: "13", color: "black", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },

            { suit: "diamonds", number: "1", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "2", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "3", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "4", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "5", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "6", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "7", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "8", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "9", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "10", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "11", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "12", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "diamonds", number: "13", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },

            { suit: "hearts", number: "1", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "2", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "3", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "4", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "5", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "6", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "7", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "8", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "9", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "10", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "11", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "12", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
            { suit: "hearts", number: "13", color: "red", faceUp: false, selected: false, sprite: "", deck: "", lastCard: false },
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
        console.log(this.state);
    }

    snarkClickCard = (card) => {
        let state = this.state
        var selectedCards = state.selected
        if (selectedCards.length === 0) {
            state["selected"] = card;
            card.selected = true;
            this.setState(state)

        }

    }

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

    middleClickCard = () => {
        var selectedCards = this.state.selected
        if (selectedCards.length === 0) {

        } else {

        }
    }


    render() {


        return (
            <div className={classes.game_page}>

                <Mat />

                {/* BUILD PILES AND SNARK PILE */}
                <Grid
                    templateColumns='repeat(5, 1fr)'
                    gap={6}
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

                    <GridItem>
                        <Snark
                            snarkList={this.state.snarkList}
                            clickCard={this.snarkClickCard}
                        />
                    </GridItem>
                </Grid>

                <Draw drawList={this.state.drawList} />

            </div>
        )
    };
}
