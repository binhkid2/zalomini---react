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
        <div className="flex justify-between items-center">
          <b>Categories</b>
          <a href="#actions-grid" className="unstyled text-xs hover:underline">
            +21 other services
          </a>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-4 mx-auto scroll-smooth overflow-auto hide-scrollbar">
          {mockdata.map((item, index) => (
            <div
              key={index} // You should use a unique key for each item when rendering lists in React
              className="shadow-small-blue flex flex-col gap-2 bg-surface-200-700-token rounded-container-token py-4 hover:scale-105 hover:shadow-md hover:cursor-pointer"
            >
              <div className="w-18 text-xs">{item.title.substring(0, 12)}</div>
              <img
                className="w-20"
                src="https://shop28decor.com/ct/uploads/2023/07/Artboard2.jpg"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
