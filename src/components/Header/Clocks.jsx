import React, { Component } from 'react';


class Clocks extends Component{
    constructor(props){
        super(props);
        this.state ={
            time: new Date().toLocaleTimeString(),
        };
    }
    componentDidMount(){
        this.intervalID = setInterval(()=>this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick(){
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }
    render(){
        return <p className="header__clock">Текущеее время:{this.state.time}</p>
    }
    
}

export default Clocks;