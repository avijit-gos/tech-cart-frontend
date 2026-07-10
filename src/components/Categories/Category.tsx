/** @format */

import { useCategory } from "@/base/hooks/useCategory";
import CategoryCardLoader from "../Loaders/CategoryCardLoader";
import Errors from "../Errors/Errors";
import CategoryCard from "../CategoryCard/CategoryCard";

const Category = () => {
  const { loading, categories, error } = useCategory();

  console.log(categories);

  if (loading) return <CategoryCardLoader />;
  if (error) return <Errors error={error} />;
  if (categories && categories.length === 0)
    return <Errors error='No category data available' />;
  if (categories && categories.length)
    return (
      <section className='grid grid-cols-6 gap-4'>
        {(categories || []).length > 0 && (
          <>
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </>
        )}
      </section>
    );
};

export default Category;
