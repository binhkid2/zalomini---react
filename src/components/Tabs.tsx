import { useState } from 'react';

export default function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  return (
   <>
    <div className="bg-gray-100 font-sans flex   items-center justify-center">
        <div className="max-w-md mx-auto">
          <div className="mb-4 flex   p-2 bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpenTab(1)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 1 ? 'bg-blue-600 text-white' : ''}`}
            >
              Section 1
            </button>
            <button
              onClick={() => setOpenTab(2)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 2 ? 'bg-blue-600 text-white' : ''}`}
            >
              Section 2
            </button>
            <button
              onClick={() => setOpenTab(3)}
              className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${openTab === 3 ? 'bg-blue-600 text-white' : ''}`}
            >
              Section 3
            </button>
          </div>
        </div>
      </div>
   </>
  );
}