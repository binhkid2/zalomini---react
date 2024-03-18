import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SfSelect } from '@storefront-ui/react';
import BackHeader from "../../components/BackHeader";

const options = [
  { label: 'Relevance', value: 'relevance' },
  { label: 'Price: Low to High', value: 'price low to high' },
  { label: 'Price: High to Low', value: 'price high to low' },
  { label: 'New Arrivals', value: 'new arrivals' },
  { label: 'Customer Rating', value: 'customer rating' },
  { label: 'Bestsellers', value: 'bestsellers' },
];
const mockdata: {
  title: string;
  url:string
}[] = [
  { title: "Credit borders" ,url:"/category/#"},
  { title: "Banks nearby"  ,url:"/category/#" },
  { title: "Transfers"  ,url:"/category/#" },
  { title: "Refunds"  ,url:"/category/#" },
  { title: "Receipts"  ,url:"/category/#" },
  { title: "Taxes"  ,url:"/category/#" },
  { title: "sdfsdfsdf"  ,url:"/category/#" },
  { title: "sdfsdf sdf"  ,url:"/category/#" },
  { title: "Transfers"  ,url:"/category/#" },
  { title: "Refunds"  ,url:"/category/#" },
  { title: "Receipts"  ,url:"/category/#" },
  { title: "Taxes"  ,url:"/category/#" },
];

export default function CategoryPage() {
  const [activeIndex, setActiveIndex] = useState(-1); 
  const navigate = useNavigate()
    function changeColorAndNavigate(index:number,url:string){
      navigate(url)
      setActiveIndex(index);
    }
  return (
    <>
    <BackHeader/>
      <div className=" grid grid-rows-1 grid-flow-col gap-2 mx-auto scroll-smooth overflow-auto hide-scrollbar  rounded-lg border border-gray-100 bg-gray-100 p-1">
        {mockdata.map((item, index) => (
          <button
            key={index} // You should use a unique key for each item when rendering lists in React
            className={`inline-block rounded-md px-4 py-2 text-sm  focus:relative w-max ${index === activeIndex ? 'bg-white text-blue-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={()=>(changeColorAndNavigate(index,item.url))}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="w-full md:max-w-[376px]">
      <p className="bg-neutral-100  w-full py-2 pl-4 rounded uppercase  font-bold tracking-widest">
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
