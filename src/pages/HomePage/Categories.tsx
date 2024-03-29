import { CategoriesTabs } from "../../types/categories";
import { FC, Suspense } from "react";
const CategoriesContent: FC = () => {
  return (
    <>
      <div className="mt-28  md:w-2/3 mx-auto  py-1  px-2 md:px-4 md:mt-3 space-y-4 ">
      <b>Categories</b>
        <div className=" overflow-x-hidden hide-scrollbar">
          <div className="grid grid-rows-2 grid-flow-col gap-4 mx-auto scroll-smooth overflow-auto hide-scrollbar">
            {CategoriesTabs.map((item) => (
              <div
                key={item.id}
                className="flex flex-col "
              >
                <a href={item.src}>
                <img
                  className="w-20 h-20 md:w-32"
                  src={item.img}
                />
                </a>
                <p className="text-xs text-gray-700 w-20  md:w-32 truncate">{item.titleVn}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Fallback: FC = () => {
  return (
    <div className="mt-28 md:w-2/3 mx-auto border  px-2 md:px-4 md:mt-3 space-y-4 ">
      <div className=" overflow-x-hidden hide-scrollbar">
        <div className="grid grid-rows-2 grid-flow-col gap-4 mx-auto scroll-smooth overflow-auto hide-scrollbar">
          {CategoriesTabs.map(( ) => (
            <div  className="flex flex-col  w-max">
               {/* Only replace this */}
              <div className="animate-ping w-20 h-20 rounded-full bg-green-600"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export const Categories: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <CategoriesContent />
    </Suspense>
  );
};
