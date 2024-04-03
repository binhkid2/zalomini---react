import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { chooseImage } from "zmp-sdk/apis";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { v4 as uuidv4 } from 'uuid';
//store jotai
import { useAtom } from "jotai";
import { imagesAtom } from "../../utils/store";
export default function UploadImageZaloMiniSDK() {
  const [base64Urls, setBase64Urls] = useState<string[]>([]);
  const [blobFiles, setBlobFiles] = useState<string[]>([]);
  const [maxImage, setMaxImage] = useState<string>("");
  const [images, setImages] = useAtom(imagesAtom);
  const convertBlobUrlsToBase64 = async (blobUrls:string[]) => {
    const promises = blobUrls.map(async (blobUrl) => {
      const response = await fetch(blobUrl);
      const blob = await response.blob();
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result?.toString().split(',')[1];
          if (base64data) {
            resolve(base64data);
          } else {
            reject('Failed to read Blob URL');
          }
        };
        reader.onerror = () => {
          reject(reader.error);
        };
        reader.readAsDataURL(blob);
      });
    });

    try {
      const base64Urls = await Promise.all(promises);
      setBase64Urls(base64Urls);
      //jotai atom
      setImages(base64Urls)
      console.log("base64Urls",base64Urls)
      
    } catch (error) {
      console.error('Error converting Blob URLs to base64:', error);
    }
  };
  const PickImageWithZaloSDk = async () => {
    try {
      const { filePaths } = await chooseImage({
          sourceType: ["album"],
          count: 6
      });
      
      const updatedBlobFiles = [...blobFiles, ...filePaths.slice(0, 6 - blobFiles.length)];
      
      if (updatedBlobFiles.length > 6) {
          setMaxImage("Upload tối đa 6 ảnh");
          setBlobFiles(updatedBlobFiles.slice(0, 6));
      } else {
          setBlobFiles(updatedBlobFiles);
      }
  
      convertBlobUrlsToBase64(updatedBlobFiles);
      console.log("images",images)
  } catch (error) {
      console.error(`Error when pick images`, error);
      setMaxImage("Upload tối đa 6 ảnh");
  }
  
};
function removeFile(index: number) {
  blobFiles.splice(index, 1);
  convertBlobUrlsToBase64(blobFiles);
}
  


  return (
    <>
      <div className="flex justify-center mt-20">
      <div className="grid grid-cols-1 justify-center  text-center w-full mx-auto">
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          <img
            src="https://static.thenounproject.com/png/625182-200.png"
            alt="upload"
            className="w-10 h-10 mx-auto"
            loading="lazy"
          />
        <button id="fileInput"  onClick={PickImageWithZaloSDk} style={{ display: "none" }} />
        </label>
        <b className="">Upload images </b>
        <label className="text-xs text-blue-600">
        Android:Can only upload 1 image at time at this time
        </label>
        <p className="text-xs text-red-500">{maxImage}</p>
      </div>
        </div>
      <div className="m-3 grid grid-row-1 gap-4 grid-flow-col scroll-smooth overflow-auto hide-scrollbar justify-center">
      {base64Urls.map((base64Image) => {
        const uniqueKey = uuidv4();
        return (
          <div key={uniqueKey} style={{ position: "relative" }} className="w-14 h-14">
            <img src={`data:image/jpeg;base64,${base64Image}`} alt={`Image ${uniqueKey}`} />
            <button
              className="absolute top-0 right-0"
              onClick={() => removeFile(uniqueKey)} // Pass unique key to removeFile function
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        );
      })}
      </div>
    </>
  );
}