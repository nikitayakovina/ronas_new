import React, { Component } from 'react';
import axios from 'axios';

const apiKey = 'a50cfb70fe89823fb332df31e05285ea'; 
const city = 'Омск';

class Temperature extends Component{

    constructor(props){
        super(props);
        this.state = {
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`,
            get : axios.get(this.url).then(res => {
                document.querySelector('.temp').innerHTML = Math.round(res.data.main.temp); 
                document.querySelector('.description').innerHTML = res.data.weather[0].description;
            })
        };
    }

    componentDidMount(){
        this.intervalID = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    tick(){
        this.setState({
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`,
            get : axios.get(this.url).then(res => {
                document.querySelector('.temp').innerHTML = Math.round(res.data.main.temp); 
                document.querySelector('.description').innerHTML = res.data.weather[0].description;
            })
        });
    }

    render(){
         return <div>
             {/* <div className="MainCenter__weather__text"><span className="temp">{this.state.weather}</span>°</div> */}
             <div className="MainCenter__weather__text"><span className="temp">{}</span></div>
             <div className="MainCenter__weather__text__two"><span className="description"></span></div>
         </div>
    }
}

export default Temperature;  