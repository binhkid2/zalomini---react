

import { FC } from "react";



const ProductCard: FC = () => {
return(
  <>

<div className="anim-float-card relative">

<div className="group block card card-hover bg-base-300 shadow-xl py-3 px-3">
<div className="relative">
  <button className="absolute end-2 top-2 z-10">
    <i className="fa-solid fa-heart fa-xl"></i>
  </button>

  <p
    className="absolute top-2 left-2 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium"
  >
    Ha Noi-TQ
  </p>

 <div className="relative h-40">  {/* h-[200px] sm:h-[300px]  */}
  <img
  src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  alt=""
  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
/>
<img
src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
alt=""
className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
/>
 </div>
</div>



<div className="mt-1.5 ">
  <h3 className="h3 text-xs font-bold">Ten San PhamTen San PhamTen San Pham</h3>
  <span
    className="mt-3 py-3 w-full inline-block bg-green-500 text-xs font-medium  tracking-wide text-white "
  >
   <div className="flex flex-row  ">
    <a href="/test"  className="mx-auto ">From 100.000 đ</a>
    <span className=" self-center items-end"><i className="fa-solid fa-circle-arrow-right fa-xl"></i></span>
   </div>
  </span>
</div>


  <div className="flex justify-between">
      <p className="text-xs text-blue-600">Ten cua shop</p>
      <p className="text-xs">5 ngay truoc</p>
  </div>

</div>


</div>
  </>
)



}




export const RecentUploaded: FC = () => {
  return (
    <>
     <div className=" mx-auto border   space-y-4 my-3">
	<div className="flex justify-between items-center">
		<b className="px-3">Recent Uploaded</b>
		<a href="/infinitePage/RecentUploaded"  className="unstyled text-xs underline px-3">Load all</a>
	</div>
	<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
 <ProductCard/>
 <ProductCard/>
 <ProductCard/>
 <ProductCard/>
 <ProductCard/>
 <ProductCard/>
 <ProductCard/>
 <ProductCard/>
	</div>
  <div className="flex justify-center">
  <a href="/infinitePage/RecentUploaded"  className="unstyled text-xs underline font-bold py-3">Load more</a>
</div>
	</div>

    </>
  );
};



