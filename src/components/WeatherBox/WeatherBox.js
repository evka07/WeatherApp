import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import {useState} from "react";
import ErrorBox from "../ErrorBox/ErrorBox";

const WeatherBox = props => {

    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHesError] = useState(false)

    const apiKey = '53d55a4a107ba38e951956b601538aac'

    const fetchDataFromAPI = async (cityName) => {
        try {
            setIsLoading(true)
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            )
            if (response.ok) {
                const data = await response.json()
                const weatherInfo = {
                    city: data.name,
                    temp: data.main.temp,
                    icon: data.weather[0].icon,
                    description: data.weather[0].main
                };
                setWeatherData(weatherInfo)
            } else {
                console.error('Error', response.status, response.statusText)
                setHesError(true)
            }

            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            console.error(error)
            setHesError(true)
        }
    }
    const handleCityChange = (newCity) => {
        setCity(newCity)
        setWeatherData(null)
        setIsLoading(false)
        setHesError(false)
        fetchDataFromAPI(newCity)
    }

    return (
        <section>
            <PickCity onSearch={handleCityChange}/>
            {hasError ? (<ErrorBox/>) : (
                weatherData && <WeatherSummary city={city} weatherData={weatherData}/>
            )}
        </section>
    )
};

export default WeatherBox;