import { AppProps } from "next/app";
import "../styles/globals.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="link-header">
        <Link href="/does_not_exist_page">Link</Link>
        <Link href="/weather">Weather</Link>
        <Link href="/currency">Currency</Link>
      </nav>
      <div className="main-container"><Component {...pageProps} /></div>
    </>
  );
}
