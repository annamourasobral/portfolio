import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle c1"></div>
        <div className="p-circle c2"></div>
        <div className="p-circle c3"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;