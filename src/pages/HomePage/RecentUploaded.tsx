
import { FC } from "react";
import ProductCard1 from "../../components/ProductCart1";


export const RecentUploaded: FC = () => {
  return (
    <>
      <div className=" mx-auto border   space-y-4 my-3">
        <div className="flex justify-between items-center">
          <b className="pt-3 px-3">Recent Uploaded</b>
          <a
            href="/infinitePage/RecentUploaded"
            className="unstyled text-xs underline px-3"
          >
            Load all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
          <ProductCard1 />
        </div>
        <div className="flex justify-center">
          <a
            href="/infinitePage/RecentUploaded"
            className="unstyled text-xs underline font-bold pb-2"
          >
            Load more
          </a>
        </div>
      </div>
    </>
  );
};


