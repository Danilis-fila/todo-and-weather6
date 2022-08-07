import React from "react";
import './weatherItem.css';

export default function WeatherItem({ weather_data }) {

    function upFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    let img = "https://openweathermap.org/img/wn/" + weather_data.weather[0]['icon'] + "@2x.png";

    var now = new Date();
    var time = new Date().toLocaleTimeString().slice(0, -3); //время (час, минута)
    var days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    var month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

    return (
        <div className="weather-card">
            <div className="card-city">{weather_data.name}</div>
            <div className="card-data-time">{days[now.getDay()] + ", " + now.getDate() + " " + month[now.getMonth()] + ", " + time}</div>
            <div className="card-grid">
                <div className="card-temperature-c">+{Math.round(weather_data.main.temp - 273)}°</div>
                <div className="card-icon">
                    <img src={img} alt="чтото пошло не так" />
                </div>
                <div className="card-description">{upFirst(weather_data.weather[0]['description'])}</div>
            </div>

            <div className="card-info">
                <div className="card-info-title">Ветер</div>
                <div className="card-info-dimension">{weather_data.wind.speed} м/c</div>
            </div>

            <div className="card-info">
                <div className="card-info-title">Давление</div>
                <div className="card-info-dimension">{weather_data.main.pressure} мм рт. ст.</div>
            </div>

            <div className="card-info">
                <div className="card-info-title">Влажность</div>
                <div className="card-info-dimension">{weather_data.main.humidity} %</div>
            </div>

            <div className="card-info">
                <div className="card-info-title">min t°</div>
                <div className="card-info-dimension">{Math.round(weather_data.main.temp_min - 273)}°</div>
            </div>

            <div className="card-info">
                <div className="card-info-title">max t°</div>
                <div className="card-info-dimension">{Math.round(weather_data.main.temp_max - 273)}°</div>
            </div>
        </div>
    )
}