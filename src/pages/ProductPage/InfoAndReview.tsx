import { FC } from "react";

import { SvgNoStarW5,SvgNoStarW4 } from '../../utils/Svg/NoStar';
import { SvgFullStarW4, SvgFullStarW5 } from '../../utils/Svg/FullStar';
export const InfoAndReview :FC=()=>{
    return(
        <>
          <div className="">
            <h2 className="text-2xl font-extrabold text-gray-800">Espresso Elegante | Coffee</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">$12</p>
              <p className="text-gray-400 text-xl"> $16  <span className="text-sm ml-1">Tax included</span></p>
            </div>
            <div className="flex space-x-2 mt-4">
             <SvgFullStarW5/>
             <SvgFullStarW5/>
             <SvgFullStarW5/>
             <SvgFullStarW5/>
             <SvgNoStarW5/>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold text-green-800">About the coffee</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
              </ul>
            </div>
            <div className="mt-8 max-w-md">
              <h3 className="text-lg font-bold text-green-900">Reviews(10)</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">5.0</p>
                 <SvgFullStarW4/>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-2/3 h-full rounded bg-green-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">4.0</p>
                 <SvgFullStarW4/>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-1/3 h-full rounded bg-green-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">3.0</p>
                 <SvgFullStarW4/>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-1/6 h-full rounded bg-green-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">2.0</p>
                 <SvgFullStarW4/>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-1/12 h-full rounded bg-green-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-800 font-bold">1.0</p>
                 <SvgFullStarW4/>
                  <div className="bg-gray-300 rounded w-full h-2 ml-3">
                    <div className="w-[6%] h-full rounded bg-green-800"></div>
                  </div>
                  <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                </div>
              </div>
              <div className="flex items-start mt-8">
                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                <div className="ml-3">
                  <h4 className="text-sm font-bold">John Doe</h4>
                  <div className="flex space-x-1 mt-1">
                   <SvgFullStarW4/>
                   <SvgFullStarW4/>
                   <SvgFullStarW4/>
                    <SvgNoStarW4/>
                    <SvgNoStarW4/>
                    <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                  </div>
                  <p className="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                </div>
              </div>
              <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-green-800 text-green-800 font-bold rounded">Read all reviews</button>
            </div>
          </div>
        </>
    )
}