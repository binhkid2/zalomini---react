import { chooseImage } from "zmp-sdk/apis";

export default  function TestPage2() {
    const handleChooseImage = async () => {
        try {
          const { filePaths, tempFiles } = await chooseImage({
              sourceType: ["album"],
              count: 6
          });
          console.log( "filePaths" + filePaths[0])
          console.log("tempFiles" + tempFiles[0].path)
        } catch (error) {
          // xử lý khi gọi api thất bại
          console.log(error);
        }
      };
  return (
    <>
    <button onClick={handleChooseImage} className="bg-green-500 px-8 py-2">test</button>
    </>
  );
}