import React, { Component } from 'react';

class Popup extends Component{
    constructor(props){
        super(props);
        this.state = {
            winner : props.winner
        }
    }

    handleReset = () =>{
        this.props.reset();
    }
    render(){
        return (
            <div className="popup-wrap">
                <div className="popup-state">
                    <div>
                        {
                            this.state.winner === 'DRAW'
                            ?
                            `DRAW`
                            :
                            `WINNER IS ${this.state.winner}`
                        } 
                    </div>
                    <button onClick={this.handleReset}>REGAME</button>
                </div>
            </div>
        )
    }
}

export default Popup;