import Link from "next/link";
import styles from "../styles/weather.module.css";



export default function Weather() {
    return (
        <div className={styles.weatherPage}>
            <h1>Weather</h1>
            <p>Forecast page</p>
            <nav>
                <Link href="/" className="weather-page-link">🔙</Link>
            </nav>
        </div>
    )
}