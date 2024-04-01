import { Outlet } from "react-router-dom";
import BottomBar from "../components/BottomBar";

import { useEffect } from "react";
import { useSnackbar } from 'notistack';
//Zalo
import { userAtom,errorAtom } from "../utils/store";
import { getUserInfo } from "zmp-sdk/apis";
import { useAtom } from "jotai";
import axios from "axios";
const Layout = () => {
  const [user, setUser] = useAtom(userAtom)
  const [err, setErr] = useAtom(errorAtom)
  const { enqueueSnackbar } = useSnackbar();
const ZaloGetUserInfo = () => {
    getUserInfo({
      success: (data) => {
        // xử lý khi gọi api thành công
        const { userInfo } = data;
        setUser({
          name:userInfo.name,
          zaloId:userInfo.id,
          avatar:userInfo.avatar
        })

        //Check if user in the database or not
        const checkUserByZaloIdUrl = `${import.meta.env.VITE_NODEJS_BACKEND}/searchUser/zaloId?zaloId=${userInfo.id}`;

        async function checkUserInMongoDb() {
          try {
            const response = await axios.get(checkUserByZaloIdUrl);
            if (!response.data.error) {
              console.log('User already in database');
            } else {
              console.log('User not found in database.adding it now...');
              const SaveUserToMongo = () => {
                const data = {
                  name:userInfo.name,
                  zaloId:userInfo.id,
                  avatar:userInfo.avatar
                };
                axios
                  .post(`${import.meta.env.VITE_NODEJS_BACKEND}/users`, data)
                  .then(() => {
                    console.log('User added to database')
                  })
                  .catch((error) => {
                    enqueueSnackbar('Error when saving user to database', { variant: 'error' });
                    console.log(error);
                  });
              };
              SaveUserToMongo()
           
           
            }
          } catch (error) {
            console.error('Error checking user in database:', (error as Error).message);
          }
        }
        
        checkUserInMongoDb();
        

      },
      fail: (error) => {
        console.log(error);
        setErr(error.toString())
        setUser({
          name:"Unverified User Name",
          zaloId:"",
          avatar: import.meta.env.VITE_404_IMAGE
        })
        console.log("err :" + err);
      },
    });
};

  useEffect(() => {
    ZaloGetUserInfo()
    console.log('useEffect layout')
    console.log("err :" + err);
    console.log("user :" ,user);

  }, []);
  return (
    <>
      
      <div className="mb-16 md:p-5">
        <Outlet />
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;