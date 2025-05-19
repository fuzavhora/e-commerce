import { getProducts } from "@/components/library";

const ProductDetails = async ({ params }) => {
  const product = await getProducts(params.product_id);

  if (!product) {
    return <div className="text-center py-10 text-xl">Product not found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Images */}
      <div className="flex flex-col items-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
        <div className="flex gap-3 mt-4 flex-wrap justify-center">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="w-20 h-20 object-cover rounded-md border hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>
      </div>

      {/* Right: Info */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <span className="inline-block bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded mb-4">
          {product.category?.name}
        </span>

        <p className="text-gray-700 text-base mb-5">{product.description}</p>
        <div className="text-2xl font-bold text-green-600 mb-6">
          ${product.price}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
