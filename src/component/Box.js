import React, { Component } from 'react';

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            done : false
        }
    }

    componentDidMount() {
        this.setState({
            idx : this.props.num
        })
    }

    handleChange = (e) => {
        this.setState({
            done : true
        })
        this.props.change(this.state.idx)
    }

    render(){
        return (
            <div className="box" onClick={!this.state.done ? this.handleChange : undefined}></div>
        )
    }
}

export default Box;