import React, { Component } from 'react';

import Box from './Box'

class TicTacToe extends Component{
    constructor(props){
        super(props);
        this.state = {
            turn : 'O',
            gameState : [
                null,null,null,
                null,null,null,
                null,null,null
            ]
        }
    }

    changeTurn = () =>{
        this.state.turn === 'O' ?
        this.setState({turn : 'X'})
        :
        this.setState({turn : 'O'})
    }
    
    changeGameState = (idx) =>{
        this.state.gameState[idx] = this.state.turn;
        this.changeTurn();
        console.log(this.state.gameState)
    }

    render(){
        return (
            <div className="tictactoe">
                <h1 className="title" onClick={this.changeHihi}>
                    TIC TAC TOE
                </h1>
                <div className="box-wrap">
                    {
                        [0,1,2,3,4,5,6,7,8].map(num => <Box num={num} key={num} change={this.changeGameState}></Box>)
                    }
                </div>
            </div>
        )
    }
}

export default TicTacToe;