

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

export const TestComponent: FC = () => {
  return (
    <>
      <div className="md:w-2/3 mx-auto border  p-3 md:p-10 space-y-4 ">
        <div className="flex justify-between items-center">
          <b>Categories</b>
          <a href="#actions-grid" className="unstyled text-xs hover:underline">
            +21 other services
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4 p-4 overflow-x-auto">
          {mockdata.map((item, index) => (
            <div
              key={index} // You should use a unique key for each item when rendering lists in React
              className="flex flex-col space-y-2 items-center"
            >
                 <img className="w-12 h-12" src="https://shop28decor.com/ct/uploads/2023/07/Artboard2.jpg"/>
             <p>category.name</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};




