import React, { useEffect, useMemo } from "react";
import "./weatherForm.css";
import { useDispatch, useSelector } from "react-redux";
import { getInfoWeather } from "../Redux/Slices/weatherSlice";
import WeatherItem from "./weatherItem";

export default function WeatherForm() {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather.weatherData)
    const weatherStatus = useSelector((state) => state.weather.status)

    useEffect(() => dataLoading, []);

    async function dataLoading() {
        await dispatch(getInfoWeather());
    }

    const weatherComponents = useMemo(() => <WeatherItem weather_data={weatherData} />, [weatherData])

    return (
        <div className="conteiner-weatherForm">
            {weatherStatus === 'pending' && <div className='loader'></div>}
            {weatherStatus === 'fulfilled' && weatherComponents}
            {weatherStatus === 'rejected' && <h2 style={{ fontSize: "24px" }}>Сервер пропал ‿︵‿ヽ(°□° )ノ︵‿︵</h2>}
        </div>
    );
}