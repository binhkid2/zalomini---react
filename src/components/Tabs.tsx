import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface Tab {
  id: number;
  src: string;
  title: string;
  titleVn: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [openTab, setOpenTab] = useState(1 );
  const navigate = useNavigate();

  const handleTabClick = (item: Tab) => {
    setOpenTab(item.id);
    navigate(item.src);
  };

  return (
<>
<div className="text-xs mt-10 flex   items-center justify-center ">
      <div className="w-full md:w-2/3 lg:w-1/3 mx-4 my-2 shadow-md grid grid-rows-1 grid-flow-col gap-2 scroll-smooth overflow-auto hide-scrollbar   border border-gray-100  p-2 m-2 rounded-lg ">
        
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item)}
              className={`flex-1   py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${
                openTab === item.id ? 'bg-green-600 text-white' : ''
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

export default Tabs;
