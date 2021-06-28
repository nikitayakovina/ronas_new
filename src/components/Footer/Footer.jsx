import React from 'react';
import Header from '../Header/Header';
import './Footer.css';
import '../../App';
import axios from 'axios';


const Footer = () => {

  const apiKey = 'a50cfb70fe89823fb332df31e05285ea';
  const city = 'Омск';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  axios.get(url).then(res => {
      document.querySelector('.humidity').innerHTML = res.data.main.humidity
      document.querySelector('.wind').innerHTML = res.data.wind.speed;
      document.querySelector('.pressure').innerHTML = res.data.main.pressure;
   })
   
  return <div className='footer'>
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
  </div>;
  } 
  export default Footer;    