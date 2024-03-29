import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface Tab {
  id: number;
  src: string;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  id?:number | string
}

const Tabs: React.FC<TabsProps> = ({ tabs,id }) => {
  const [openTab, setOpenTab] = useState(id );
  const navigate = useNavigate();

  const handleTabClick = (item: Tab) => {
    setOpenTab(item.id);
    navigate(item.src);
  };

  return (
    <div className="font-sans flex items-center justify-center">
      <div className="w-full md:w-2/3 lg:w-1/3 mx-4 my-2 ">
        <div className="mb-4 flex p-2 bg-white rounded-lg shadow-md">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${
                openTab === item.title ? 'bg-green-600 text-white' : ''
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
