// pages/products/[id].tsx
import { useRouter } from 'next/router';
import { useCart } from '../../context/Cart';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product = { id, name: `Game ${id}`, price: 50 };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">{product.name}</h1>
      <p className="mb-4">Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
