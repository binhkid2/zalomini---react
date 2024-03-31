import { FC, useEffect, useState } from "react";
import { ProductCard1 } from "../../components/ProductCart1";
import axios from "axios";
import DefaultFallback from "../../components/DefaultFallBack";
import { ProductCard1Props } from "../../types/products";

const backend_url = import.meta.env.VITE_NODEJS_BACKEND + '/products';

export const RecentUploaded: FC = () => {
  const [products, setProducts] = useState<ProductCard1Props []>([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const response = await axios.get(backend_url);
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="mx-auto border space-y-4 my-3">
        <div className="flex justify-between items-center">
          <b className="pt-3 px-3">Recent Uploaded</b>
          <a href="/infinitePage/RecentUploaded" className="unstyled text-xs underline px-3">
            Load all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
          {loading ? (
            <DefaultFallback/>
          ) : (
            products.map((product) => (
              <ProductCard1
                key={product._id} // Assuming _id is a unique identifier for products
                address={product.address}
                name={product.name}
                price={product.price}
                shopName={product.shopName}
                createdAt={product.createdAt} 
                images={product.images}
                description={product.description}
                _id={product._id}                        />
            ))
          )}
        </div>
        <div className="flex justify-center">
          <a href="/infinitePage/RecentUploaded" className="unstyled text-xs underline font-bold pb-2">
            Load more
          </a>
        </div>
      </div>
    </>
  );
};
