import Link from "next/link";
import styles from "../styles/404.module.css";


export default function NotFoundPage() {
    return (
        <div className={styles.errorMessageBlock}>
            <h1>This page does not exist yet</h1>
            <nav>
                <Link href="/" className="weather-page-link">🔙</Link>
            </nav>
        </div>
    )
}