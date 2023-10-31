import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({city, weatherData}) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={weatherData ? weatherData.description : 'Weather Icon'}
        src={weatherData ? `${process.env.PUBLIC_URL}/images/weather-icons/${weatherData.icon}.png` : ''} />
      <div className={styles.weatherInfo}>
        <h2>{city}</h2>
        <p>
          <strong>Temp:</strong> {weatherData ? `${weatherData.temp}°C` : 'N/A'}
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;