import Footer from "../components/frontend/layouts/Footer";
import Header from "../components/frontend/layouts/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-3xl mx-auto overflow-hidden">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
