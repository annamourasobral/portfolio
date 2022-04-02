import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/productList";

const App = () => {
  return (
    <div>
      <Intro/>
      <About/>
      <ProductList/>
    </div>
  );
};

export default App;