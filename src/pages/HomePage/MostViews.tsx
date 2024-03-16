import { FC } from "react";

const ProductCard: FC = () => {
  return (
    <>
      <div className="anim-float-card px-1 md:px-3 relative ">
        <div className="block card card-hover space-y-2 p-2 w-40 ">
          <div className="group relative block">
            <div className="relative h-[150px] sm:h-[250px]">
              <button className="absolute end-2 top-2 z-10">
                <i className="fa-solid fa-heart fa-xl"></i>
              </button>

              <p className="absolute top-2 left-2 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium">
                Ha Noi-TQ
              </p>

              <img
                src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-end p-1 mx-auto">
              <h3 className="h3 text-xs font-bold text-white">
                Ten San PhamTen San PhamTen San Pham
              </h3>

              <span className="mt-3 w-full inline-block bg-green-500  py-1 px-1 text-xs font-medium  tracking-wide text-white">
                <div className="flex flex-row">
                  <a href="/test" className="mr-3">
                    Chi tu 100.000 đ
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MostView: FC = () => {
  return (
    <>
      <div className=" mx-auto border  p-3 md:p-10 space-y-4 my-3">
        <div className="flex justify-between items-center">
          <b>Most View</b>
          <a
            href="/infinitePage/PeopleLikes"
            className="unstyled text-xs underline "
          >
            Load more
          </a>
        </div>
        <div className="grid grid-rows-1  gap-2 grid-flow-col scroll-smooth overflow-auto hide-scrollbar mx-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};
