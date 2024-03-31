import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Suspense } from "react";
import { DateTimeConvertEng } from "../utils/DateTimeConvert";
import { ProductCard1Props } from "../types/products";
const image_404 = import.meta.env.VITE_404_IMAGE;
const ProductCard1Content: FC<ProductCard1Props> = ({
  address,
  name,
  price,
  shopName,
  createdAt,
  images,
  description,
  _id,
}) => {
  return (
    <>
      <div className="anim-float-card relative ">
        <div className="group block card card-hover bg-base-300 shadow-xl py-3 px-3">
          <div className="relative">
            <button className="absolute end-2 top-2 z-10">
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                style={{ color: "#f0e6e6" }}
              />
            </button>

            <p className="absolute top-2 left-2 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium max-w-20 truncate">
              {address}
            </p>
            <div className="relative h-40">
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
          </div>

          <div className="mt-1.5 ">
            <a href={`/product/${_id}`} className=" text-xs font-bold">
              {name}
            </a>
            <p className="text-xs two-line-paragraph">{description}</p>

            <span className="rounded-sm mt-3 py-3 px-2 w-full inline-block bg-green-500 text-xs font-medium  tracking-wide text-white ">
              <div className="flex flex-row  ">
                <a href={`/product/${_id}`} className="mx-auto">
                  Chi Tu {price} đ
                </a>

                {/* Your content here 
    <span className=" self-center items-center">
      <FontAwesomeIcon icon={faCircleArrowRight} size="xl" style={{color: "#f0e6e6",}} />
      </span>
      */}
              </div>
            </span>
          </div>

          <div className="flex justify-between">
            <p className="text-xs truncate text-blue-600 ">{shopName}</p>
            <p className="text-xs truncate  ">
              {" "}
              {DateTimeConvertEng(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Fallback: FC = () => {
  return (
    <div className="anim-float-card relative ">
      <div className="group block card card-hover bg-base-300 shadow-xl py-3 px-3">
        <div className="animate-ping   h-40 rounded-full bg-green-600"></div>
      </div>
    </div>
  );
};

export const ProductCard1: FC<ProductCard1Props> = (props) => {
  return (
    <Suspense fallback={<Fallback />}>
      <ProductCard1Content {...props} />
    </Suspense>
  );
};
