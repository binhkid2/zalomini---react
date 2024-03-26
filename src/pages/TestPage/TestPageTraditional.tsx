import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
export default function TestPageTraditional() {
    const [images, setImages] = useState<string[]>([]);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedImages = Array.from(e.target.files as FileList);
      Promise.all(selectedImages.map(fileToBase64))
        .then((base64Images) => {
          const newImages = [...images, ...base64Images];
          if (newImages.length > 6) {
            setImages(newImages.slice(0, 6)); // Truncate to first 6 images
            console.error("you can only upload max 6 images")
        } else {
            setImages(newImages);
          }
        })
        .catch((error) =>
          console.error("Error converting images to base64:", error)
        );
    };
  
    const fileToBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            resolve(reader.result);
          } else {
            reject(new Error("Failed to convert file to base64"));
          }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });
    };
  
    const deleteImage = (index: number) => {
      const updatedImages = [...images];
      updatedImages.splice(index, 1);
      setImages(updatedImages);
    };
  
function sendForm(){
    console.log(images)
}
  return (
    <div>
      
      <div className="flex justify-center">
      <div className="grid grid-cols-1 justify-center  text-center w-full mx-auto">
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          <img
            src="https://static.thenounproject.com/png/625182-200.png"
            alt="upload"
            className="w-10 h-10 mx-auto"
            loading="lazy"
          />
          <input id="fileInput" type="file" onChange={handleImageChange} multiple style={{ display: "none" }} />
        </label>
        <b className="">Upload images </b>
      </div>
        </div>
      <div className="m-3 grid grid-row-1 gap-4 grid-flow-col scroll-smooth overflow-auto hide-scrollbar justify-center">
        {images.map((base64Image, index) => (
          <div
            key={index}
            style={{ position: "relative" }}
            className="w-14 h-14"
          >
            <img src={base64Image} alt={`Image ${index}`} />
            <button
            className="absolute top-0 right-0"
            onClick={() => deleteImage(index)} // Pass index to deleteImage function
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          </div>
        ))}
      </div>
      <button onClick={sendForm}>Send </button>
    </div>
  );
}
