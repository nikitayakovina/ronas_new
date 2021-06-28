import React, { Component, useState, useEffect} from 'react';
import Weather from './Weather';
import '../newComp/Main.css';
import icon from '../img/icon.png';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';

const apiKey = 'a50cfb70fe89823fb332df31e05285ea'; 

class Main extends React.Component{
    state = {
        city : undefined,
        temp : undefined,
        humidity : undefined,
        speed : undefined,
        pressure : undefined,
        description : undefined,
        icon : undefined
    }
    // Конвертация погоды Градусы Цельсия/Градусы Фаренгейта
    conversionWeather = async (e) => {
        e.preventDefault();
        $('.header__city__deg__C').click(function () {
            $('.header__city__deg__C').css('background','rgba(255, 255, 255, 0.2)');
            $('.header__city__deg__F').css('background','none');
        })
        $('.header__city__deg__F').click(function () {
            $('.header__city__deg__F').css('background','rgba(255, 255, 255, 0.2)');
            $('.header__city__deg__C').css('background','none');
        })
    }
    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`);
        const data = await api_url.json();
        this.setState({
            city : data.name,
            temp : Math.round(data.main.temp),
            humidity : data.main.humidity,
            speed : data.wind.speed,
            pressure : data.main.pressure,
            description : data.weather[0].description,
            icon : data.weather[0].icon
        }) 
        if ($('.form__city__btn').click){
            // Close form
            $('.body').css('background-color','rgba(73,140,236)');
            $('.form__city').css('display','none');
        } 
    }
    gettingMyLocation = async (city) => {
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`);
        const data = await api_url.json();
        this.setState({
            city : data.name,
            temp : Math.round(data.main.temp),
            humidity : data.main.humidity,
            speed : data.wind.speed,
            pressure : data.main.pressure,
            description : data.weather[0].description,
            icon : data.weather[0].icon
        }) 
    }
    myLocation = async (e) => {
        e.preventDefault();
        this.state = {
            latitude : undefined,
            longitude : undefined
        }
        navigator.geolocation.getCurrentPosition(async position => {
            this.setState({
                latitude : position.coords.latitude,
                longitude : position.coords.longitude
            })
            const {latitude, longitude} = this.state;
            const url = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
            const data = await url.json();
            const city = data.name;
            this.gettingMyLocation(city);
        })
    }
    openForm = async (e) => {
        e.preventDefault();
        $('.body').css('z-index','1').css('background-color','rgba(73,140,236,0.5)').css('transition','0.4s');
        $('.form__city').css('display','block').css('z-index','2');
        $('#btn').click(function () {
            this.gettingWeather();
        });
    }
    render(){
        return(
            <div className="body">
                <div className="header__city">
                    <div className="header__city__place">
                        <a className="header__city__place__one" href="" onClick={this.openForm}>Сменить город</a>
                        <div className="header__city__place__two"><img src={icon} alt="" /></div> 
                        <a className="header__city__place__three" href="" onClick={this.myLocation}>Мое местоположение</a>
                    </div>
                    <div className="header__city__place__time">
                    {/* <p className="header__clock">Текущеее время:{this.state.time}</p>
                        <span className="header__time"></span> */}
                    </div>
                    <div className="header__city__deg">
                        <div className="header__city__deg__0">o</div>
                        <div className="header__city__deg__C">
                            <a href="" onClick={this.conversionWeather}>C</a>
                        </div>
                        <div className="header__city__deg__F">
                            <a href="" onClick={this.conversionWeather}>F</a>
                        </div>
                    </div>
                </div> 
                <form className="form__city " onSubmit={this.gettingWeather}>
                    <div className="form__city__close">
                        <button className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h1>Укажите ваш город</h1>
                    <div className="form__city__input">
                        <input className="input__text form-control" type="text" name="city" />
                        <button className="form__city__btn btn btn-primary">Сохранить</button>
                    </div>
                </form>
                {/* Форма для выбора города */}
                <div className="header__city__name" onClick={this.myLocation}></div>
                {/* Компонента */}
                <Weather
                    city = {this.state.city}
                    temp = {this.state.temp}
                    humidity = {this.state.humidity}
                    speed = {this.state.speed}
                    pressure = {this.state.pressure}
                    description = {this.state.description}
                    icon = {this.state.icon}
                />
            </div>
        );
    }
}
export default Main;