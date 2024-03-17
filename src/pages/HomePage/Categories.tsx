

import { FC } from "react";

const mockdata: {
  title: string;
}[] = [
  { title: "Credit borders" },
  { title: "Banks nearby" },
  { title: "Transfers" },
  { title: "Refunds" },
  { title: "Receipts" },
  { title: "Taxes" },
  { title: "sdfsdfsdf" },
  { title: "sdfsdf sdf" },
  { title: "Transfers" },
  { title: "Refunds" },
  { title: "Receipts" },
  { title: "Taxes" },
];

export const Categories: FC = () => {
  return (
    <>
      <div className="md:w-2/3 mx-auto border  p-3 md:p-10 space-y-4 ">
          <b>Categories</b>
        <div className=" overflow-x-hidden hide-scrollbar">
     <div className="grid grid-rows-2 grid-flow-col gap-4 mx-auto scroll-smooth overflow-auto hide-scrollbar">
     {mockdata.map((item, index) => (
            <div
              key={index} // You should use a unique key for each item when rendering lists in React
              className="flex flex-col  w-max"
            >
                 <img className="w-20 h-20" src="https://shop28decor.com/ct/uploads/2023/07/Artboard2.jpg"  />
             <p className="text-xs text-gray-500 ">{item.title}</p>
            </div>
          ))}
  </div>
</div>
      </div>
    </>
  );
};




