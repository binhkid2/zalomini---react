import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom'
import { FC, Suspense } from "react";

const ProductPageContent : FC = () => {
  const params = useParams()
    return (
      <>
      
<div className="container px-5 pb-20  mx-auto">
<div className="lg:w-4/5 mx-auto flex flex-wrap">
  <img alt="ecommerce" className="lg:w-1/2 w-full h-96 object-cover object-center rounded border border-gray-200" src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/hinh-dep.jpg"/>
  {params.id}
  
  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
    <div className="flex justify-between">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <button
        type="button"
        className="btn btn-sm variant-ghost-error h-8"
       
      >
      <FontAwesomeIcon icon={faHeart} />
        <span>Lưu tin</span>
      </button>
    </div>
  
    
    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
    
    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
      <div className="flex">
        <span className="mr-3">Color</span>
        <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
        <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
        <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
      </div>
      <div className="flex ml-6 items-center">
        <span className="mr-3">Size</span>
        <div className="relative">
          <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
            <option>SM</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          
        </div>
      </div>
    </div>
    <div className="flex">
      <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
      <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
    </div>
  </div>
</div>
</div>
</>
    )
}


const Fallback: FC = () => {
  return (
      <div className="container px-5 pb-20 mt-36  mx-auto">
      <div className="animate-ping rounded-full bg-green-600 relative h-[350px] sm:h-[500px]"></div>
        </div>
  );
};

export default function ManagePage ()  {
  return (
    <Suspense fallback={<Fallback />}>
      <ProductPageContent />
    </Suspense>
  );
}
