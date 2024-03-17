import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="grid grid-rows-1 grid-flow-col gap-2 mx-auto scroll-smooth overflow-auto hide-scrollbar  rounded-lg border border-gray-100 bg-gray-100 p-1">
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
     
    </>
  );
}
