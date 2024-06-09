import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white">
          <Link href="/">VideoGame Store</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300">Home</Link>
          <Link href="/products" className="text-gray-300">Products</Link>
          <Link href="/cart" className="text-gray-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
