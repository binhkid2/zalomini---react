import { useEffect, useState } from "react";
import BackHeader from "../../components/BackHeader";
import {  ManageCard } from "../../components/ManageCard";
import Tabs from "../../components/Tabs";
import { ManageTabs } from "../../types/manageTabs";
import { ManageCardProps } from "../../types/products";
import axios from "axios";
import DefaultFallback from "../../components/DefaultFallBack";
import {  useAtom, useAtomValue } from "jotai";
import { paramAtom, shopAtom } from "../../utils/store";
import NotYet from "./NotYet";
import Empty from "./Empty";
export default function ManagePage  ()  {
  const shop = useAtomValue(shopAtom)._id;
  const [param, setParam] = useAtom(paramAtom)
  let backend_url = `${    import.meta.env.VITE_NODEJS_BACKEND }/searchProduct/shop?shop=${shop}`;
  let proPage = false;
  if ( param === "visible") {
    backend_url = `${      import.meta.env.VITE_NODEJS_BACKEND }/searchProduct/shop?shop=${shop}`;
  } else if ( param === "hidden") {
    backend_url = `${      import.meta.env.VITE_NODEJS_BACKEND }/searchProduct/shop?shop=${shop}&hidden=true`;
  } else if ( param === "pro") {
    //navigate to not yet
    proPage = true;
  } else {
    backend_url = `${      import.meta.env.VITE_NODEJS_BACKEND }/searchProduct/shop?shop=${shop}`;
  }
  const [products, setProducts] = useState<ManageCardProps[]>([]);
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
    setParam('visible')
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [param,backend_url]); // Use backend_url instead of param
  return (
    <>
      <BackHeader />
      <Tabs tabs={ManageTabs} />
      {!proPage ? (
        <>
          {products.length === 0 ? (
            <Empty />
          ) : (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {loading ? (
                <DefaultFallback />
              ) : (
                products.map((product) => (
                  <ManageCard
                    key={product._id} // Assuming _id is a unique identifier for products
                    address={product.address}
                    name={product.name}
                    price={product.price}
                    createdAt={product.createdAt}
                    images={product.images}
                    description={product.description}
                    _id={product._id}
                  />
                ))
              )}
            </div>
          )}
        </>
      ) : (
        <NotYet />
      )}

    </>
  );
}


