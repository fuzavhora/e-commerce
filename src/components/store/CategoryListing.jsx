import { getCategories } from "../library";

const CategoryListing = async () => {
  const categories = await getCategories();

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-4">Categories</h1>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className="p-2 my-2 border rounded-sm cursor-pointer hover:bg-gray-100 transition"
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryListing;
