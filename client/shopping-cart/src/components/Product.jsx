function Product() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://product.hstatic.net/200000404397/product/72e199dc550b8755de1a_fc3288ef97ec4d47b5b8574402b2f7c4_large.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Product;
