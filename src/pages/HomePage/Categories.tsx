import { FC, Suspense } from "react";

const mockdata: {
  title: string;
  url: string;
}[] = [
  { title: "Credit borders", url: "/sdads" },
  { title: "Banks nearby", url: "/sdads" },
  { title: "Transfers", url: "/sdads" },
  { title: "Refunds", url: "/sdads" },
  { title: "Receipts", url: "/sdads" },
  { title: "Taxes", url: "/sdads" },
  { title: "sdfsdfsdf", url: "/sdads" },
  { title: "sdfsdf sdf", url: "/sdads" },
  { title: "Transfers", url: "/sdads" },
  { title: "Refunds", url: "/sdads" },
  { title: "Receipts", url: "/sdads" },
  { title: "Taxes", url: "/sdads" },
];

const CategoriesContent: FC = () => {
  return (
    <>
      <div className="md:w-2/3 mx-auto border  px-2 md:px-4 md:mt-3 space-y-4 ">
        <b>Categories</b>
        <div className=" overflow-x-hidden hide-scrollbar">
          <div className="grid grid-rows-2 grid-flow-col gap-4 mx-auto scroll-smooth overflow-auto hide-scrollbar">
            {mockdata.map((item, index) => (
              <div
                key={index} // You should use a unique key for each item when rendering lists in React
                className="flex flex-col  w-max"
              >
                <img
                  className="w-20 h-20"
                  src="https://shop28decor.com/ct/uploads/2023/07/Artboard2.jpg"
                />
                <p className="text-xs text-gray-500 ">{item.title}</p>
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
    <div className="md:w-2/3 mx-auto border  px-2 md:px-4 md:mt-3 space-y-4 ">
      <b>Categories</b>
      <div className=" overflow-x-hidden hide-scrollbar">
        <div className="grid grid-rows-2 grid-flow-col gap-4 mx-auto scroll-smooth overflow-auto hide-scrollbar">
          {mockdata.map((item, index) => (
            <div key={index} className="flex flex-col  w-max">
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
