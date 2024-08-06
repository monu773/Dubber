import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Awesome Product",
    description: "This is an awesome product that you will love!",
    image: "https://img.freepik.com/free-vector/female-lips-makeup-icon_24877-83887.jpg",
  },
  {
    id: 2,
    name: "Another Product",
    description: "This product is even better than the last one!",
    image: "https://img.freepik.com/free-vector/female-lips-makeup-icon_24877-83887.jpg",
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
