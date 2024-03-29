import React from 'react';
import { useNavigate } from "react-router-dom";
import { Header } from 'zmp-ui';

// Example component with a prop
const BackHeader: React.FC = () => {
const navigate = useNavigate();
  return (
    <Header
    className=" pl-2  pb-[6px] bg-green-500 bottom-rounded "
    showBackIcon={false}
    title={
      (
        <div className="" onClick={()=>(navigate('/'))}>
          <div className="flex flex-grow py-3 pl-2">
            <img
              src="https://png.pngtree.com/element_pic/00/16/09/2057e0eecf792fb.jpg"
              alt="user"
              className="w-8 h-8 "
            />
            <div className="ml-2">
              <h4 className="text-sm">Si Thu Cong</h4>
              <p className="text-xs text-white">Noi buon ban so 1 Viet Nam</p>
            </div>
          </div>
        </div>
      ) as unknown as string
    }
  />
  );
};

export default BackHeader;
