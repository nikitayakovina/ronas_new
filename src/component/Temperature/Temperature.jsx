import React, { Component } from 'react';
import '../Main/Main.css';
import axios from 'axios';

const apiKey = 'a50cfb70fe89823fb332df31e05285ea';

class Temperature extends React.Component{
    constructor(props){
        super(props);
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&lang=ru&units=metric&appid=${apiKey}`;
        axios.get(url).then(res => {
            document.querySelector('.temp').innerHTML = Math.round(res.data.main.temp); 
            document.querySelector('.description').innerHTML = res.data.weather[0].description;
            document.querySelector('.humidity').innerHTML = res.data.main.humidity
            document.querySelector('.wind').innerHTML = res.data.wind.speed;
            document.querySelector('.pressure').innerHTML = res.data.main.pressure;
        })
    }
    componentDidMount(){

    }
    componentWillMount(){

    }
    render(){
        return(
            <div>
                <div className="header__city__name">
                    <span className="city">
                        {this.props.city}
                    </span>
                </div>
                {/* Название города */}
         </div>
        );
    }
}
// const Temp = (props) => {
//     // constructor(props){
//     //     super(props);
//     // }
//     const url = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&lang=ru&units=metric&appid=${apiKey}`;
//     axios.get(url).then(res => {
//         document.querySelector('.temp').innerHTML = Math.round(res.data.main.temp); 
//         document.querySelector('.description').innerHTML = res.data.weather[0].description;
//         document.querySelector('.humidity').innerHTML = res.data.main.humidity
//         document.querySelector('.wind').innerHTML = res.data.wind.speed;
//         document.querySelector('.pressure').innerHTML = res.data.main.pressure;
//      })
//     return(<div>
//             <div className="header__city__name">
//                 <span className="city">
//                     {props.city}
//                 </span>
//             </div>
//         </div>
//     );
// }
export default Temperature;