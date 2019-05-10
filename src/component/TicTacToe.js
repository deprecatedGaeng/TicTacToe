import React, { Component,Fragment } from 'react'
import Box from './Box'
import Popup from './Popup'

class TicTacToe extends Component{
    constructor(props){
        super(props);
        this.state = {
            boxes : [
                { idx :0 , checked : false , mark : undefined},
                { idx :1 , checked : false , mark : undefined},
                { idx :2 , checked : false , mark : undefined},
                { idx :3 , checked : false , mark : undefined},
                { idx :4 , checked : false , mark : undefined},
                { idx :5 , checked : false , mark : undefined},
                { idx :6 , checked : false , mark : undefined},
                { idx :7 , checked : false , mark : undefined},
                { idx :8 , checked : false , mark : undefined}
            ],
            turn : 'O',
            clickCount : 0,
            gameState : [
                null,null,null,
                null,null,null,
                null,null,null
            ],
            winCoundition : [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ],
            winner : undefined
        }
    }
    componentDidUpdate(){
    }
    componentWillUpdate(){

    }
    reset = () => {
        this.setState({
            boxes : [
                { idx :0 , checked : false , mark : undefined},
                { idx :1 , checked : false , mark : undefined},
                { idx :2 , checked : false , mark : undefined},
                { idx :3 , checked : false , mark : undefined},
                { idx :4 , checked : false , mark : undefined},
                { idx :5 , checked : false , mark : undefined},
                { idx :6 , checked : false , mark : undefined},
                { idx :7 , checked : false , mark : undefined},
                { idx :8 , checked : false , mark : undefined}
            ],
            turn : 'O',
            clickCount : 0,
            gameState : [
                null,null,null,
                null,null,null,
                null,null,null
            ],
            winner : undefined
        })
    }

    changeTurn = () =>{
        this.state.turn === 'O'
        ?
        this.setState({turn : 'X'})
        :
        this.setState({turn : 'O'})
    }
    
    mark = idx =>{
        this.state.gameState[idx] = this.state.turn;
        this.state.boxes[idx].checked = true;
        this.state.boxes[idx].mark = this.state.turn;
        this.state.clickCount++;
        this.setState({
            gameState : [...this.state.gameState],
            boxes : [...this.state.boxes]
        })
    }

    changeGameState = idx => {
        this.mark(idx)
        this.changeTurn();
        if(this.state.clickCount >= 5 && !this.state.winner){
            this.checkWinner()
        }
    }

    checkWinner = () => {
        this.state.winCoundition.some(condition => {
            if(
                this.state.gameState[condition[0]] === this.state.turn &&
                this.state.gameState[condition[1]] === this.state.turn &&
                this.state.gameState[condition[2]] === this.state.turn
            ){
                this.setState({
                    winner : this.state.turn
                })
                return this.state.turn
            }else{
                if(this.state.clickCount === 9){
                    this.setState({
                        winner : 'DRAW'
                    })
                    return 'draw'
                }
            }
        })
    }

    render(){
        return (
            <Fragment>
                <div className="tictactoe">
                    <h1 className="title">
                        TIC TAC TOE
                    </h1>
                    <div className="now-turn">
                        TURN : {this.state.turn}
                    </div>
                    <div className="box-wrap">
                        {
                            this.state.boxes.map(box => <Box box={box} key={box.idx} change={this.changeGameState}></Box>)
                        }
                    </div>
                </div>
                {
                    !this.state.winner 
                    ?
                    false
                    :
                    <Popup winner={this.state.winner} reset={this.reset}></Popup>
                }
            </Fragment>
        )
    }
}

export default TicTacToe;