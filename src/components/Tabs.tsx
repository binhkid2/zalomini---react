import { useState } from 'react';

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  return (
   <>
    <div className="font-sans flex   items-center justify-center">
        <div className="w-full md:w-2/3 lg:w-1/3 mx-4 my-2 ">
          <div className="mb-4 flex   p-2 bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${openTab === 1 ? 'bg-green-600 text-white' : ''}`}
            >
              Section 1
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${openTab === 2 ? 'bg-green-600 text-white' : ''}`}
            >
              Section 2
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-green transition-all duration-300 ${openTab === 3 ? 'bg-green-600 text-white' : ''}`}
            >
              Section 3
            </button>
          </div>
        </div>
      </div>
   </>
  );
}