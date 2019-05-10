import React, { Component } from 'react';

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.setState({
            idx : this.props.box.idx,
            checked : this.props.box.checked
        })
    }
    
    handleChange = () => {
        this.setState({
            idx : this.props.box.idx,
            checked : this.props.box.checked
        })
        this.props.change(this.state.idx)
    }

    already = () =>{
        alert('선택할 수 없습니다.')
    }
    render(){
        return (
            <div className="box" onClick={!this.state.checked ? this.handleChange : this.already}>
                {this.props.box.mark}
            </div>
        )
    }
}

export default Box;