import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const res = await response.json();

      const sliceTrending = res.products.slice(0, 6);
      setProduct(sliceTrending);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <span>Trending Products</span>
      {loading ? (
        <p>Loading trending products....</p>
      ) : (
        <div className="product-grid">
          {product.map((prod) => {
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
      <Link to="/products">
        <button style={{ width: '100%', padding: 10 }}>
          View all Products
        </button>
      </Link>
    </>
  );
};

export default Home;
