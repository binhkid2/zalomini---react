
import { FC, useEffect, useState } from "react";
import {ProductCardSmall} from "../../components/ProductCartSmall";
import { ProductCardSmallProps } from "../../types/products";
import axios from "axios";
import DefaultFallback from "../../components/DefaultFallBack";
const backend_url = import.meta.env.VITE_NODEJS_BACKEND + '/products?sortBy=likes&order=-1';

export const OtherPeopleLike: FC = () => {
  const [products, setProducts] = useState<ProductCardSmallProps []>([]);
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
      <div className=" mx-auto border  p-3 md:p-10 space-y-4 my-3">
        <div className="flex justify-between items-center">
          <b className="p-3">Other people liked</b>
          <a
            href="/infinitePage/PeopleLikes"
            className="unstyled text-xs underline "
          >
            Load more
          </a>
        </div>
        <div className="grid grid-rows-1  gap-2 grid-flow-col scroll-smooth overflow-auto hide-scrollbar mx-auto">
        {loading ? (
            <DefaultFallback/>
          ) : (
            products.map((product) => (
              <ProductCardSmall
                key={product._id} // Assuming _id is a unique identifier for products
                address={product.address}
                name={product.name}
                price={product.price}
                shopName={product.shopName}
                images={product.images}
                _id={product._id}                        />
            ))
          )}
        </div>
      </div>
    </>
  );
};
