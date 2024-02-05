import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const res = await response.json();

      setProduct(res);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  console.log(product);
  return (
    <>
      <h2>Product Details</h2>
      <h3>{product?.title}</h3>
      {loading ? (
        <p>Loading product....</p>
      ) : (
        <div className="product-card">
          <img src={product.thumbnail} alt="images" />
          <h4>${product.price}</h4>
          <p style={{ fontWeight: 'bold' }}>{product.description}</p>
        </div>
      )}
    </>
  );
};
export default ProductDetails;
