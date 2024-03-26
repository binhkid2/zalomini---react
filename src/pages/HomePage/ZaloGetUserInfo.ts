import { getUserInfo } from "zmp-sdk/apis";

const ZaloGetUserInfo = () => {
  // Define the function to be exported
  const getInfo = () => {
    getUserInfo({
      success: (data) => {
        // xử lý khi gọi api thành công
        const { userInfo } = data;
        console.log(userInfo);
      },
      fail: (error) => {
        // xử lý khi gọi api thất bại
        console.log(error);
      },
    });
  };

  // Export the function
  return getInfo;
};

export default ZaloGetUserInfo;
