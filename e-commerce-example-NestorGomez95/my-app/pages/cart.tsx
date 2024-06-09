
import { useCart } from '../context/Cart';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="mb-4">
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
