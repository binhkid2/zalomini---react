import { FC, useEffect, useState } from "react";
import axios from "axios";
import DefaultFallback from "../../components/DefaultFallBack";
import { ProductCard1Props } from "../../types/products";
import {
    SfScrollable,
  } from '@storefront-ui/react';
import { ProductCardSmall } from "../../components/ProductCartSmall";
const backend_url = import.meta.env.VITE_NODEJS_BACKEND + '/products';

export const AnotherProductsOfThisShop: FC = () => {
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
      <div className="mx-auto border space-y-4 mt-3">
        <div className="flex justify-between items-center">
          <b className="pt-3 px-3">Another Products From This Shop</b>
        </div>

        <SfScrollable
        className="m-auto pb-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        buttons-placement="floating"
        drag
      >
       
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
        </SfScrollable>
        </div>
    </>
  );
};
