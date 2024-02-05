import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProductListing = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const res = await response.json();

      setAllProduct(res.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h2>Product Listing</h2>
      {loading ? (
        <p>Loading all products....</p>
      ) : (
        <div className="product-grid">
          {allProduct.map((prod) => {
            return (
              <div className="product-card" key={prod.id}>
                <Link to={`/products/${prod.id}`}>
                  <img src={prod.thumbnail} alt="images" />
                  <h3>{prod.title}</h3>
                  <h4>${prod.price}</h4>
                </Link>
              </div>
            );
          })}
        </div>
      )}
      <Link to="/">
        <button style={{ width: '100%', padding: 10 }}>
          Trending Products
        </button>
      </Link>
    </>
  );
};
export default ProductListing;
