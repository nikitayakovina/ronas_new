import React from 'react';

const Weather = (props) => (
    <div className="">
                <div className="header__city__name">
                    <span className="city">{props.city}</span>
                </div>
                <div className="MainCenter">
                    <div class="weather">
                        <div className="MainCenter__weather">
                            {/* <div className="MainCenter__weather__sun">
                            </div>
                            <div className="MainCenter__weather__sun"></div>
                            <div className="MainCenter__weather__sun__ray1"></div>
                            <div className="MainCenter__weather__sun__ray2"></div>
                            <div className="MainCenter__weather__sun__ray3"></div>
                            <div className="MainCenter__weather__sun__ray4"></div>
                            <div className="MainCenter__weather__sun__ray5"></div>
                            <div className="MainCenter__weather__sun__ray6"></div>
                            <div className="MainCenter__weather__sun__ray7"></div>
                            <div className="MainCenter__weather__sun__ray8"></div>
                            <div className="MainCenter__weather__numbers"></div> */}
                            <div className="MainCenter__weather__text">
                                <span className="temp">{props.temp}&#8451;</span>
                                <div className="MainCenter__weather__sun">
                                    <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="" />
                                    <div className="MainCenter__weather__text__two"><span className="description">{props.description}</span></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
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
                            <span className="wind">{props.speed}</span> м/c
                        </div>
                        </td>
                        <td>
                        <div className="footer_param__value">
                            <span className="pressure">{props.pressure}</span> мм рт. ст.
                        </div>
                        </td>
                        <td>
                        <div className="footer_param__value">
                            <span className="humidity">{props.humidity}</span> %
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
export default Weather;