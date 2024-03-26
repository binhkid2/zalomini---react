
import { FC } from "react";
import {ProductCardSmall} from "../../components/ProductCartSmall";

export const OtherPeopleLike: FC = () => {
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
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
          <ProductCardSmall />
        </div>
      </div>
    </>
  );
};
