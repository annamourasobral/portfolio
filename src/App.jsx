import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
};

export default App;