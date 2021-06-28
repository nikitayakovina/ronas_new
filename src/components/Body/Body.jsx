import React, { Component } from 'react';
import './Body.css';
import Header from '../Header/Header';
import MainCenter from '../MainCenter/MainCenter';
import Footer from '../Footer/Footer';

const API_KEY = 'a50cfb70fe89823fb332df31e05285ea';

class Body extends Component{
  // gettingWeather = async () => {
  //   const API_URL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Омск&lang=ru&units=metric&appid=${API_KEY}`);
  //   const data = await API_URL.json();
  // }
render(){
    return( <div className='body'>
      <Header/>
      <MainCenter/>
      <Footer/>  
    </div>
    );
  }
}


// const Body = () => {
//     return <div className='body'>
//       <Header/>
//       <MainCenter/>
//       <Footer/>  
//     </div>;
//   }

  export default Body;