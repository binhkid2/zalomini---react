import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SfSelect } from "@storefront-ui/react";
import BackHeader from "../../components/BackHeader";
import { CategoriesTabs } from "../../types/categories";
import Tabs from "../../components/Tabs";
const options = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price low to high" },
  { label: "Price: High to Low", value: "price high to low" },
  { label: "New Arrivals", value: "new arrivals" },
  { label: "Customer Rating", value: "customer rating" },
  { label: "Bestsellers", value: "bestsellers" },
];
import { useParams } from "react-router-dom";
export default function CategoryPage() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const params = useParams();
  function changeColorAndNavigate(index: number, src: string) {
    navigate(src);
    setActiveIndex(index);
  }

  //<div className="w-full md:w-2/3 lg:w-1/3 mx-4 my-2 ">
  // <div className="mb-4 flex   p-2 bg-white rounded-lg shadow-md">
  return (
    <>
      <BackHeader />
      <Tabs tabs={CategoriesTabs} id={params.id}/>
      <div className=" flex   items-center justify-center">
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-4 my-2 shadow-md grid grid-rows-1 grid-flow-col gap-2 scroll-smooth overflow-auto hide-scrollbar   border border-gray-100  p-2 m-2 rounded-lg">
          {CategoriesTabs.map((item, index) => (
            <button
              key={index}
              onClick={() => changeColorAndNavigate(index, item.src)}
              className={`w-max    py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${
                index === activeIndex ? "bg-green-600 text-white" : ""
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full md:max-w-[376px]">
        <p className="  w-full py-2 pl-4 rounded uppercase  font-bold tracking-widest">
          Sort by
        </p>
        <div className="px-4 flex gap-2">
          <SfSelect aria-label="Sort by">
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </SfSelect>
          <SfSelect aria-label="Sort by">
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </SfSelect>
        </div>
      </div>
    </>
  );
}
