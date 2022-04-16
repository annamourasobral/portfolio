import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Creative & modern</h1>
        <p className="pl-desc">
          My portfolio includes projects that thaught me by challenging my skills. 
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div className="github">
        <button><a href="https://www.github.com/annamourasobral">Full portfolio on GitHub</a></button>
      </div>
    </div>
  );
};

export default ProductList;