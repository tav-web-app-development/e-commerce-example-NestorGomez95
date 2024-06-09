import Link from 'next/link';

const products = [
  { id: 1, name: 'Game 1', price: 50 },
  { id: 2, name: 'Game 2', price: 40 },
  { id: 3, name: 'Game 3', price: 30 },
];

const Products = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
