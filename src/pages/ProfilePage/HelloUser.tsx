import { FC } from "react";

export const HelloUser: FC = () => {
  return (
    <>
      <div className="mt-20 flex justify-between mx-2 md:mx-10 my-2 md:my-10">
        <div className="w-1/2 self-center">
          <div className="flex justify-center mx-2 md:mx-10 my-2 md:my-10">
            <div className="self-center container flex flex-col items-center">
              <img
                loading="lazy"
                className="rounded-full w-12 h-12 md:w-24 md:h-24 object-cover"
                alt=""
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
              />
              <p className="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone text-xs">
                Xin chào
              </p>
              <p className="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone text-xs">
                userInfo.name
              </p>
              <p className="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone text-xs">
                Have a nice day!
              </p>
            </div>
          </div>
        </div>


        <div className="w-1/2 self-center">
          <div className="flex justify-center mx-2 md:mx-10 my-2 md:my-10">
            <div className="self-center container flex flex-col items-center">
              <img
                loading="lazy"
                className="rounded-full w-12 h-12 md:w-24 md:h-24 object-cover"
                alt=""
                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh.jpg"
              />
              <p className="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone text-xs">
                Chủ Shop
              </p>
              <p className="font-bold bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone text-xs">
                shopInfo.name
              </p>
              <button
                type="button"
                className="btn btn-sm underline font-bold bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone text-xs"
              >
                Setting
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xs sm:text-sm flex flex-row justify-around py-3 md:py-7">
        <button type="button" className="btn-icon variant-filled">
          <i className="fa-solid fa-heart"></i>
        </button>
        <button type="button" className="btn-icon variant-filled">
          <i className="fa-solid fa-list"></i>
        </button>

        <button type="button" className="btn-icon variant-filled">
          <i className="fa-solid fa-globe"></i>
        </button>
      </div>

      <div className="border p-6 mx-2 md:mx-10">
        <div className="font-semibold">mockDataVi.title</div>
        <div className="text-xs opacity-70">mockDataVi.description</div>
        <div className="space-y-4 mt-8">
          <div className="flex justify-between">
            <div>
              <div>item.title</div>
              <div className="text-xs opacity-70">item.description</div>
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs md:text-sm">
          Có một vấn đề kỹ thuật? Bạn muốn gửi phản hồi về tính năng beta? Cần
          thêm thông tin chi tiết về các sản phẩm của YenVietSoft? Liên hệ với
          chúng tôi.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="my-3 w-40 btn variant-filled-tertiary"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};
