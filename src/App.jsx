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
      <meta charSet="utf-8" />
      <title>Anna Moura Sobral - Portfolio</title>
      <link rel="canonical" href="http://annamourasobral.com" />
      <meta name="description" content="Anna Moura Sobral's Portfolio" />
      
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