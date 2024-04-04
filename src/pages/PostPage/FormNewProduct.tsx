import { useState } from "react";
import { SfInput, SfButton } from "@storefront-ui/react";
import { useAtomValue,useAtom } from "jotai";
import { categoryAtom, imagesAtom, shopAtom } from "../../utils/store";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ConvertToImagesJSON,Images } from "../../utils/ConvertToImagesJSON";
export default function FormNewProduct() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [wholesalePrice, setWholesalePrice] = useState(0);
  const [moq, setMoq] = useState(0);
  const [notice, setNotice] = useState("");
  //TODO
  const variants = ["variants do it later useState"];
  const tags = ["tags do it later useState"];
//Get from Atom
const [base64Urls, setBase64Urls] = useAtom(imagesAtom)
const shop = useAtomValue(shopAtom)._id;
const shopName = useAtomValue(shopAtom).name;
const address = useAtomValue(shopAtom).address;
const category = useAtomValue(categoryAtom);
  //alway send like this
  const review = [
    {
      SiThuCong: 4,
      review: "",
    },
  ];
  const enName = "";
  const enDescription = "";
  const enNotice = "";
  const views = 1;
  const likes = 1;
  const hidden = false;
  const sendForm = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    //first turn base64 images to array of images urls
    const nodejs_uploadS3 =
      import.meta.env.VITE_NODEJS_BACKEND + "/upload-image-base64";
    const imagesArray: string[] = [];
    for (let i = 0; i < base64Urls.length; i++) {
      const data = {
        base64Image: base64Urls[i],
      };
      try {
        // Making a POST request using Axios
        const response = await axios.post(nodejs_uploadS3, data);
        imagesArray.push(response.data.image_url);
      } catch (error) {
        // Handle errors here
        console.error("Error:", error);
      }
    }
    let images:Images[] = ConvertToImagesJSON(imagesArray)
    console.log(images);
    //use those image urls
    const dataSend = {
      name,
      description,
      price,
      variants,
      tags,
      review,
      enName,
      enDescription,
      enNotice,
      views,
      likes,
      hidden,
      address,
      shopName,
      category,
      images,
      shop,
      // Include optional fields if provided
      ...(quantity !== 0 && { quantity }),
      ...(wholesalePrice !== 0 && { wholesalePrice }),
      ...(moq !== 0 && { moq }),
      ...(notice !== "" && { notice }),
    };
    console.log(dataSend);
    axios
      .post(`${import.meta.env.VITE_NODEJS_BACKEND}/products`, dataSend)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Product Created successfully", { variant: "success" });
        setName(''),setNotice(''),setDescription('') ,setPrice(0),setQuantity(0),setWholesalePrice(0),setMoq(0),setBase64Urls([]),images=[]
        navigate('/')
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error when creating product", { variant: "error" });
        console.log(error);
        setName(''),setNotice(''),setDescription('') ,setPrice(0),setQuantity(0),setWholesalePrice(0),setMoq(0),setBase64Urls([]),images=[]
        navigate('/')
      });
  };
  return (
    <>
      <form onSubmit={sendForm} className="px-4">
        <label>
          <span className="typography-label-sm font-medium">
            Name <span className="text-xs text-red-500"> *</span>
          </span>
          <SfInput
            value={name}
            placeholder="Product Name"
            className=""
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        {/*
<p className="mt-0.5 text-negative-700 typography-text-sm font-medium">
              The field cannot be empty
            </p>
  */}

        <label>
          <span className="typography-label-sm font-medium">
            Price <span className="text-xs text-red-500"> *</span>
          </span>
          <SfInput
            value={price}
            placeholder="price"
            className=""
            required
            onChange={(event) => setPrice(parseInt(event.target.value))}
          />
        </label>

        <label>
          <span className="mt-2 typography-label-sm font-medium block">
            Description <span className="text-xs text-red-500"> *</span>
          </span>
          <textarea
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write something about your product..."
            className="block w-full py-2 pl-4 pr-7 rounded-md border border-neutral-300 placeholder:text-neutral-500"
          />
        </label>

        <label>
          <span className="typography-label-sm font-medium">Quantity</span>
          <SfInput
            value={quantity}
            placeholder="quantity"
            className=""
            required
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
        </label>

        <label>
          <span className="typography-label-sm font-medium">
            wholesalePrice
          </span>
          <SfInput
            value={wholesalePrice}
            placeholder="wholesalePrice"
            className=""
            required
            onChange={(event) =>
              setWholesalePrice(parseInt(event.target.value))
            }
          />
        </label>

        <label>
          <span className="typography-label-sm font-medium">moq</span>
          <SfInput
            value={moq}
            placeholder="moq"
            className=""
            required
            onChange={(event) => setMoq(parseInt(event.target.value))}
          />
        </label>

        <label>
          <span className="typography-label-sm font-medium"> notice </span>
          <SfInput
            value={notice}
            placeholder="notice"
            className=""
            onChange={(event) => setNotice(event.target.value)}
          />
        </label>
        <p className="text-xs text-neutral-500 typography-text-sm mt-2">
          * marked fields are required
        </p>
        <div className="flex gap-x-4 md:justify-end mt-6">
          <SfButton type="submit" className="flex-grow md:flex-grow-0" disabled={loading}>
            Submit
          </SfButton>
        </div>
      </form>
    </>
  );
}
