import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Suspense } from "react";
import { ProductCardSmallProps } from "../types/products";
import { useNavigate } from "react-router-dom";
const image_404 = import.meta.env.VITE_404_IMAGE;
const ProductCardSmallContent : FC<ProductCardSmallProps> = ({
  address,
  name,
  price,
  images,
  _id,
}) => {
  const navigate = useNavigate();
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
                {address}
              </p>
              <img
                 src={(images && images[0]?.src) || image_404}
                 alt={(images && images[0]?.alt) || ""}
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 rounded-sm"
              />

              <img
                src={(images && images[1]?.src) || image_404}
                alt={(images && images[1]?.alt) || ""}
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rounded-sm"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-1 mx-auto">
              <p onClick={() => navigate(`/product/${_id}`)} className="  text-xs font-bold text-white">
               {name}
              </p>

              <span className="rounded-md mt-3 w-full inline-block bg-green-500  py-1 px-1 text-xs font-medium  tracking-wide text-white">
                <div className="flex flex-row ">
                <p onClick={() => navigate(`/product/${_id}`)} className="mx-auto">
                    Chi tu {price} đ
                  </p>
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

export const ProductCardSmall: FC<ProductCardSmallProps> = (props) => {
  return (
    <Suspense fallback={<Fallback />}>
      <ProductCardSmallContent {...props} />
    </Suspense>
  );
};
