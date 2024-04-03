import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";

import { useCallback, useEffect } from "react";
import { useSnackbar } from "notistack";
//Zalo
import { userAtom, shopAtom } from "../utils/store";
import { getUserInfo } from "zmp-sdk/apis";
import { useAtom } from "jotai";
import axios from "axios";
const Layout = () => {
  const [user, setUser] = useAtom(userAtom);
  const [shop, setShop] = useAtom(shopAtom);
  const { enqueueSnackbar } = useSnackbar();
  const ZaloGetUserInfo= useCallback(() => {
    getUserInfo({
      success: (data) => {
        // xử lý khi gọi api thành công
        const { userInfo } = data;
        setUser({
          name: userInfo.name,
          zaloId: userInfo.id,
          avatar: userInfo.avatar,
        });

        console.log("user :", user);
        //Check if user in the database or not
        const checkUserByZaloIdUrl = `${
          import.meta.env.VITE_NODEJS_BACKEND
        }/searchUser/zaloId?zaloId=${userInfo.id}`;

        async function checkUserInMongoDb() {
          try {
            const response = await axios.get(checkUserByZaloIdUrl);
            if (!response.data.error) {
              console.log("User already in database.Use that user and shop");
              //search shop by owner (user Id)
              const searchShopByUserId = `${
                import.meta.env.VITE_NODEJS_BACKEND
              }/searchShop/owner?owner=${response.data.user._id}`;
              const res = await axios.get(searchShopByUserId);
              if (res.data.error == false) {
                setShop({
                  _id: res.data.shop._id,
                  name: res.data.shop.name,
                  description: res.data.shop.description,
                  address: res.data.shop.address,
                  owner: res.data.shop.owner,
                  avatar: res.data.shop.avatar,
                  phone: res.data.shop.phone,
                  view: res.data.shop.view,
                  askOrder: res.data.shop.askOrder,
                  coverImage: res.data.shop.coverImage,
                  createdAt: res.data.shop.createdAt,
                });
                
              } else {
                console.log("shop not found in database");
              }
            } else {
              console.log("User not found in database.adding it and shop info now..." );
              const SaveUserAndShopToMongo = () => {
                const userData = {
                  name: userInfo.name,
                  zaloId: userInfo.id,
                  avatar: userInfo.avatar,
                };
                const coverImage = import.meta.env.VITE_COVER_IMAGE;
                axios
                  .post(
                    `${import.meta.env.VITE_NODEJS_BACKEND}/users`,
                    userData
                  )
                  .then((response) => {
                    console.log("User added to database");
                    // Access the created user from the response data

                    //add shop to database
                    const shopData = {
                      name:  response.data.name + " Shop",
                      description: "description",
                      address: "Ha Noi-TQ",
                      owner: response.data._id,
                      avatar: response.data.avatar,
                      phone: "1",
                      view: 1,
                      askOrder: 1,
                      coverImage: coverImage,
                    };
                    console.log("shopData", shopData);
                    axios
                      .post(
                        `${import.meta.env.VITE_NODEJS_BACKEND}/shops`,
                        shopData
                      )
                      .then((response) => {
                        console.log("Shop added to database");
                        setShop({
                          _id: response.data._id,
                          name: response.data.name,
                          description: response.data.description,
                          address: response.data.address,
                          owner: response.data.owner,
                          avatar: response.data.avatar,
                          phone: response.data.phone,
                          view: response.data.view,
                          askOrder: response.data.askOrder,
                          coverImage: response.data.coverImage,
                          createdAt: response.data.createdAt,
                        });
                        
                      })
                      .catch((error) => {
                        enqueueSnackbar("Error", { variant: "error" });
                        console.log(error);
                      });
                  })
                  .catch((error) => {
                    enqueueSnackbar("Error when saving user to database", {
                      variant: "error",
                    });
                    console.log(error);
                  });
              };
              SaveUserAndShopToMongo();
            }
          } catch (error) {
            console.error(
              "Error checking user in database:",
              (error as Error).message
            );
          }
        }

        checkUserInMongoDb();
      },
      fail: (error) => {
        console.log(error);
        setUser({
          name: "Unverified User Name",
          zaloId: "",
          avatar: import.meta.env.VITE_404_IMAGE,
        });
      },
    });
  }, []);

  useEffect(() => {
    ZaloGetUserInfo();
    console.log("useEffect layout");
    console.log("shop :", shop);
    console.log("user :", user);
  }, [ZaloGetUserInfo]); // Only include ZaloGetUserInfo if it has no dependencies
  useEffect(() => {
    console.log("shop :", shop);
    console.log("user :", user);
  }, [shop, user]); // Include user and shop as dependencies for this effect
  return (
    <>
      <div className="mb-16 ">
        <Outlet />
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;
