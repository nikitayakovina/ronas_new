import React from 'react';
import './MainCenter.css';
import Tempreture from '../Weather/Tempreture';


const MainCenter = () => {

return <div className="MainCenter">
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
        <Tempreture/>
    </div>
</div>
    
</div>;
}

export default MainCenter;