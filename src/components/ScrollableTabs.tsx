import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
interface Tab {
    id: number;
    src: string;
    title: string;
    titleVn: string;
  }
  
  interface TabsProps {
    tabs: Tab[];
  }
const ScrollableTabs: React.FC<TabsProps> = ({ tabs }) => {
    const navigate = useNavigate();
    const params = useParams();
    function changeColorAndNavigate( src: string) {
      navigate(src);
    }
    const greenButtonRef = useRef<HTMLButtonElement>(null); // Define the type of ref as HTMLButtonElement
  
    useEffect(() => {
        // Scroll to the button with bg-green-600 text-white class when the component mounts
        setTimeout(() => {
          if (greenButtonRef.current) {
            greenButtonRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 0);
      }, []); // Run this effect only once when the component mounts
      
  return (
<>
<div className="mt-16 flex   items-center justify-center">
        <div className=" w-full md:w-2/3 lg:w-1/3 mx-4 mb-2 shadow-md grid grid-rows-1 grid-flow-col gap-2 scroll-smooth overflow-auto hide-scrollbar   border border-gray-100  p-2 m-2 rounded-lg">
          {tabs.map((item) => (
            <button
            ref={item.src.substring(10) === params.id ? greenButtonRef : null} // Set ref if the button matches the condition
            key={item.id}
            onClick={() => changeColorAndNavigate(item.src)}
            className={`text-xs w-max py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${
              params.id && item.src.substring(10) === params.id ? "bg-green-600 text-white" : ""
            }`}
          >
            {item.title}
          </button>
          ))}
        </div>
      </div>



</>
  );
};

export default ScrollableTabs;
