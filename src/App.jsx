import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import {Helmet} from "react-helmet";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
    <Helmet>
          <title>Anna's Portfolio</title>
          <meta name="Anna's Portfolio" content="Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://annamourasobral.com/" />
          <meta property="og:title" content="Anna's Portfolio" />
          <meta property="og:image" content="https://i.ibb.co/xhdjdXb/preview.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://annamourasobral.com/" />
          <meta property="twitter:title" content="Anna's Portfolio" />
          <meta
            property="twitter:description"
            content="Welcome to my Portfolio, checkout my most recent projects and send me an email to discuss your ideas!"
          />
          <meta property="twitter:image" content="/https://i.ibb.co/xhdjdXb/preview.png" />
        </Helmet>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;