

import { FC } from "react";


export const BuyService: FC = () => {
    

  return (
    <>
<div className="border mx-2 md:mx-10 my-3 md:my-10">
    <h4 className="h4 text-center font-bold">Buy More Credit</h4>
    <div className="flex justify-center text-center">
      
      <img 
      loading="lazy"
      className="w-40 h-40 rounded-2xl object-cover"
      src="https://res.cloudinary.com/yenvietsoft/image/upload/v1702119436/theheai_kbbmsa.png"
      alt="Uploaded Thumbnail"
    />
    </div>
    <hr />

    <div className="flex justify-between items-center p-4">
        <div>
            <b>Tesla Model S</b>
            <div className="text-xs opacity-70">Free recharge at any station</div>
        </div>
        <div className="badge variant-ghost-tertiary">25% OFF</div>
    </div>
    <hr />
    <div className="p-4 border-t border-surface-300-600-token space-y-4">
        <div className="uppercase opacity-70 font-bold text-sm">Basic Configuration</div>
        <div className="">
                <div className="inline-flex px-1 text-sm items-center">
                
                    <div className="ml-1">item.label</div>
                </div>

                <div className="inline-flex px-1 text-sm items-center">
                
                <div className="ml-1">item.label</div>
            </div>


            <div className="inline-flex px-1 text-sm items-center">
                
                <div className="ml-1">item.label</div>
            </div>
        </div>
    </div>
    <hr />
    <div className="flex justify-between p-4 gap-8">
        <div>
            <div className="font-semibold text-2xl">$187.00</div>
            <div className="text-sm opacity-70">per day</div>
        </div>
        <button className="btn btn-sm variant-filled-primary w-full">Rent now</button>
    </div>
    <div className="flex justify-between p-4 gap-8">
        <div>
            <div className="font-semibold text-2xl">$187.00</div>
            <div className="text-sm opacity-70">per day</div>
        </div>
        <button className="btn btn-sm variant-filled-primary w-full">Rent now</button>
    </div>
    <div className="flex justify-between p-4 gap-8">
        <div>
            <div className="font-semibold text-2xl">$187.00</div>
            <div className="text-sm opacity-70">per day</div>
        </div>
        <button className="btn btn-sm variant-filled-primary w-full">Rent now</button>
    </div>
</div>
    </>
  );
};




