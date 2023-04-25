import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }) => {
    return <>
        <Component {...pageProps} />
        <Analytics />
    </>
}

export default App;