import React, { Component, useState, useEffect} from 'react';
import $ from "jquery";
import './Main.css';
import icon from '../../img/icon.png';
import Temperature from '../Temperature/Temperature';
import { render } from '@testing-library/react';



class Main extends React.Component{
    changeCity = (e) => {
        e.preventDefault();
        $('.body').css('z-index','1').css('background-color','rgba(73,140,236,0.5)').css('transition','0.4s');
        $('.form__city').css('display','block').css('z-index','2');
        $('#btn').click(function () {
          var value = $('.input__text').val();
          render(<Temperature city={value}/>);
        //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${value}&lang=ru&units=metric&appid=${apiKey}`;
        //   axios.get(url).then(res => {
        //     document.querySelector('.city').innerHTML = res.data.name
        //   })
          $('.body').css('background-color','rgba(73,140,236)');
          $('.form__city').css('display','none');
        });
    }
    myLocation = (e) =>{

        // определение местоположения
        // определить координаты 
        // по координатам определить город 
        // подставить их в url
    }
    
    render(){
        return(<div className="body">
            <div className='header'>
                <div className="header__city">
                {/* <div className="header__city__name"><span className="city"></span></div> */}
                <div className="header__city__place">
                    <a className="header__city__place__one" href="" onClick={this.changeCity}>Сменить город</a>
                    <div className="header__city__place__two"><img src={icon} alt="" /></div> 
                    <a className="header__city__place__three" href="" onClick={this.myLocation}>Мое местоположение</a>
                    {/* <div className="header__city__place__three">Мое местоположение</div> */}
                </div>
                <div className="header__city__place__time">
                {/* <p className="header__clock">Текущеее время:{this.state.time}</p>
                     <span className="header__time"></span> */}
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
                    <input type="text" className="input__text"/>
                    <input autoComplete="false" type="button" id="btn" value="Окей"/>
                </div>
                </div>
                {/* Форма для выбора города */}
            </div>
            {/* Header */}
            <div className="MainCenter">
                <div class="weather">
                    <div className="MainCenter__weather">
                        <div className="MainCenter__weather__sun"></div>
                        <div className="MainCenter__weather__sun__ray1"></div>
                        <div className="MainCenter__weather__sun__ray2"></div>
                        <div className="MainCenter__weather__sun__ray3"></div>
                        <div className="MainCenter__weather__sun__ray4"></div>
                        <div className="MainCenter__weather__sun__ray5"></div>
                        <div className="MainCenter__weather__sun__ray6"></div>
                        <div className="MainCenter__weather__sun__ray7"></div>
                        <div className="MainCenter__weather__sun__ray8"></div>
                        <div className="MainCenter__weather__numbers"></div>
                        <div className="MainCenter__weather__text"><span className="temp">{}</span></div>
                        <div className="MainCenter__weather__text__two"><span className="description"></span></div>
                    </div>
                </div>
            </div>
            {/* MainCenter */}
            <div className='footer'>
                <table>
                    <tr>
                        <td>
                            <div className="footer__param">
                            Ветер
                        </div>
                        </td>
                        <td>
                            <div className="footer__param">
                            Давление
                        </div>
                        </td>
                        <td>
                            <div className="footer__param">
                            Влажность
                        </div>
                        </td>
                        <td>
                            <div className="footer__param">
                            Вероятность дождя
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="footer_param__value">
                            <span className="wind"></span> м/c
                        </div>
                        </td>
                        <td>
                        <div className="footer_param__value">
                            <span className="pressure"></span> мм рт. ст.
                        </div>
                        </td>
                        <td>
                        <div className="footer_param__value">
                            <span className="humidity"></span> %
                        </div>
                        </td>
                        <td>
                        <div className="footer_param__value">
                            <span className=""></span>
                        </div>
                        </td>
                    </tr>
                </table>
            </div>
            {/* Footer */}
        </div>
        );
    }
}

export default Main;