import React, { Component } from 'react';
import $ from "jquery";
import './Header.css';
import axios from 'axios';
import icon from '../../img/icon.png';
import Clocks from './Clocks';

const apiKey = 'a50cfb70fe89823fb332df31e05285ea';

class Header extends React.Component{
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
  //открытие и закрытие формы для выбора города 
  changeCity = async (e) => {
    e.preventDefault();
    $('.body').css('z-index','1').css('background-color','rgba(73,140,236,0.5)').css('transition','0.4s');
    $('.form__city').css('display','block').css('z-index','2');
    $('#btn').click(function () {
      var value = $('.input__text').val();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&lang=ru&units=metric&appid=${apiKey}`;
      axios.get(url).then(res => {
        document.querySelector('.city').innerHTML = res.data.name
      })
      $('.body').css('background-color','rgba(73,140,236)');
      $('.form__city').css('display','none');
    });
  }



  



  render(){
    return(<div className='header'>
    <div className="header__city">
      <div className="header__city__name"><span className="city"></span></div>
      <div className="header__city__place">
        <a className="header__city__place__one" href="" onClick={this.changeCity}>Сменить город</a>
        <div className="header__city__place__two"><img src={icon} alt="" /></div> 
        <div className="header__city__place__three">Мое местоположение</div>
      </div>
      <div className="header__city__place__time">
      <p className="header__clock">Текущеее время:{this.state.time}</p>
        <span className="header__time"></span>
      </div>
      <div className="header__city__deg">
        <div className="header__city__deg__0">o</div>
        <div className="header__city__deg__C">
          <p>C</p>
          </div>
        <div className="header__city__deg__F">
          <p>F</p>
        </div>
      </div>
    </div> 
    {/* Форма для выбора города */}
    <div className="form__city">
      <h1>Укажите ваш город</h1>
      <div className="form__city__input">
        <input type="text" className="input__text" />
        <input autoComplete="false" type="button" id="btn" value="Окей"/>
      </div>
    </div>
    {/* Форма для выбора города */}
  </div>
    );
  }
}
export default Header;