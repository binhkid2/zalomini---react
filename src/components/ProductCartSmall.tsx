import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Suspense } from "react";

const ProductCardSmallContent : FC = () => {
    return(
      <>
        <div className="anim-float-card px-1 md:px-3 relative ">
        <div className="block card card-hover space-y-2 p-2 w-40 ">
          <div className="group relative block">
            <div className="relative h-[150px] sm:h-[250px]">
              <button className="absolute end-2 top-2 z-10">
              <FontAwesomeIcon icon={faHeart} size="xl" style={{color: "#f0e6e6",}} />
              </button>

              <p className="absolute top-2 left-2 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium">
                Ha Noi-TQ
              </p>

              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-sm"
              />

              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-sm"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-1 mx-auto">
              <h3 className="h3 text-xs font-bold text-white">
                Ten San PhamTen San PhamTen San Pham
              </h3>

              <span className="rounded-md mt-3 w-full inline-block bg-green-500  py-1 px-1 text-xs font-medium  tracking-wide text-white">
                <div className="flex flex-row ">
                  <a href="/test" className="mx-auto">
                    Chi tu 100.000 đ
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      </>
    )}

const Fallback :FC = ()=>{

  return(
    <div className="anim-float-card px-1 md:px-3 relative ">
    <div className="block card card-hover space-y-2 p-2 w-40 ">
      <div className="group relative block">
        <div className="animate-ping rounded-full bg-green-600 relative h-[150px] sm:h-[250px]"></div>
      </div>
    </div>
  </div>
  )
}

export const ProductCardSmall: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <ProductCardSmallContent />
    </Suspense>
  );
};
