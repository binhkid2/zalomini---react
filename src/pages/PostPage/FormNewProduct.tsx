import { useState } from "react";
import { SfInput, SfButton, SfThumbnail, SfSwitch } from "@storefront-ui/react";
import { useAtomValue, useAtom } from "jotai";
import { categoryAtom, imagesAtom, shopAtom } from "../../utils/store";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ConvertToImagesJSON, Images } from "../../utils/ConvertToImagesJSON";

//tags
import { SfChip, SfIconCloseSm } from "@storefront-ui/react";
interface Variant {
  variant: string;
}
const initVariants: Variant[] = [];

interface Tag {
  tag: string;
}
const initTags: Tag[] = [];
export default function FormNewProduct() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [isWholeSale, setIsWholeSale] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [wholesalePrice, setWholesalePrice] = useState(0);
  const [moq, setMoq] = useState(0);
  const [notice, setNotice] = useState("");
  //variants
  const [variants, setVariants] = useState(initVariants);
  const removeVariants = (val: string) => {
    const newList = variants.filter((item) => item.variant !== val);
    setVariants(newList);
  };

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === ";") {
      e.preventDefault(); // Prevent form submission or comma/semicolon input
      addVariantsFromString(inputValue);
    }
  };

  const addVariantsFromString = (inputString: string) => {
    const newVariants = inputString
      .split(/[;,]+/) // Split input value by commas or semicolons
      .map((variant) => variant.trim()) // Trim each variant
      .filter((variant) => variant !== ""); // Filter out empty variants

    if (newVariants.length > 0) {
      setVariants([
        ...variants,
        ...newVariants.map((variant) => ({ variant })),
      ]); // Add new variants to the existing variants array
      setInputValue(""); // Clear input field after adding
    }
  };
  //tags
  const [tags, setTags] = useState(initTags);
  const removeTag = (val: string) => {
    const newList = tags.filter((item) => item.tag !== val);
    setTags(newList);
  };

  const [inputValueTag, setInputValueTag] = useState<string>("");

  const handleInputKeyPressTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === ";") {
      e.preventDefault(); // Prevent form submission or comma/semicolon input
      addTagsFromString(inputValueTag);
    }
  };

  const addTagsFromString = (inputString: string) => {
    const newTags = inputString
      .split(/[;,]+/) // Split input value by commas or semicolons
      .map((tag) => ({ tag: tag.trim() })) // Trim each tag and create an object
      .filter((tagObj) => tagObj.tag !== ""); // Filter out empty tags

    if (newTags.length > 0) {
      setTags([...tags, ...newTags]); // Add new tags to the existing tags array
      setInputValueTag(""); // Clear input field after adding
    }
  };

  //Get from Atom
  const [base64Urls, setBase64Urls] = useAtom(imagesAtom);
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
    let images: Images[] = ConvertToImagesJSON(imagesArray);
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
        setName(""),
          setNotice(""),
          setDescription(""),
          setPrice(0),
          setQuantity(0),
          setWholesalePrice(0),
          setMoq(0),
          setBase64Urls([]),
          (images = []);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error when creating product", { variant: "error" });
        console.log(error);
        setName(""),
          setNotice(""),
          setDescription(""),
          setPrice(0),
          setQuantity(0),
          setWholesalePrice(0),
          setMoq(0),
          setBase64Urls([]),
          (images = []);
        navigate("/");
      });
  };
  return (
    <>
      {/*   form onSubmit={sendForm} */}
      <div className="px-4">
        <label>
          <span className="typography-label-sm font-medium ">
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
          <span className="block mt-1 typography-label-sm font-medium">
            Price (VND) <span className="text-xs text-red-500"> *</span>
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
          <span className="mt-1 typography-label-sm font-medium block">
            Description <span className="text-xs text-red-500"> *</span>
          </span>
          <textarea
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Write something about your product..."
            className="block w-full py-2 pl-4 pr-7 rounded-md border border-neutral-300 placeholder:text-neutral-500"
            rows={4}
          />
        </label>
        {/*  Variants */}
        <label>
          <span className="block mt-1 typography-label-sm font-medium">
            Variants
          </span>
          <SfInput
            value={inputValue}
            placeholder="Enter a variant"
            className=""
            onKeyDown={handleInputKeyPress}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <ul className="flex flex-wrap gap-1 sm:flex-row my-2">
          {variants.map(({ variant }) => (
            <li key={variant}>
              <SfChip
                className="mr-2 rounded-lg"
                inputProps={{
                  checked: true,
                  onChange: () => removeVariants(variant),
                }}
                slotSuffix={
                  <SfIconCloseSm className="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
                }
              >
                {variant}
              </SfChip>
            </li>
          ))}
        </ul>

        <label>
          <p className="block mt-1 typography-label-sm font-medium">
            Quantity{" "}
            <span className="text-xs text-neutral-500 typography-text-sm mt-2">
              (keep blank if the product is alway available)
            </span>
          </p>
          <SfInput
            value={quantity}
            placeholder="quantity"
            className=""
            required
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
        </label>
        <label className="flex justify-between cursor-pointer mb-4 gap-2">
        WholeSale Price (If has)?
        <SfSwitch checked={isWholeSale} onChange={() => setIsWholeSale(!isWholeSale)} />
        </label>
        {isWholeSale && (
          <div className="flex justify-between">
            <label className="w-1/3">
              <span className="block mt-1 text-xs font-bold">
                Wholesale Price (VND)
              </span>
              <SfInput
                value={wholesalePrice}
                placeholder="Wholesale Price"
                className=""
                required
                onChange={(event) =>
                  setWholesalePrice(parseInt(event.target.value))
                }
              />
            </label>

            <label className="w-1/3">
              <span className="block mt-1 text-xs font-bold">
                MOQ
              </span>
              <SfInput
                value={moq}
                placeholder="MOQ"
                className=""
                required
                onChange={(event) => setMoq(parseInt(event.target.value))}
              />
            </label>
          </div>
        )}

        <label>
          <span className="block mt-1 typography-label-sm font-medium">
            notice (if any)
          </span>
          <SfInput
            value={notice}
            placeholder="notice"
            className=""
            onChange={(event) => setNotice(event.target.value)}
          />
        </label>

        {/*  Tags */}
        <label>
          <span className="block mt-1 typography-label-sm font-medium">
            Tags
          </span>
          <SfInput
            value={inputValueTag}
            placeholder="Enter a variant"
            className=""
            onKeyDown={handleInputKeyPressTag}
            onChange={(event) => setInputValueTag(event.target.value)}
          />
        </label>
        <ul className="flex flex-wrap gap-1 sm:flex-row ">
          {tags.map(({ tag }) => (
            <li key={tag}>
              <SfChip
                className=" rounded-lg"
                inputProps={{
                  checked: true,
                  onChange: () => removeTag(tag),
                }}
                slotPrefix={<SfThumbnail className={`bg-gray-500`} />}
                slotSuffix={
                  <SfIconCloseSm className="text-neutral-500 hover:text-primary-800 active:text-primary-900 disabled:opacity-20" />
                }
              >
                {tag}
              </SfChip>
            </li>
          ))}
        </ul>

        <p className="text-xs text-neutral-500 typography-text-sm mt-2">
          * marked fields are required
        </p>
        <div className="flex gap-x-4 md:justify-end mt-6">
  <SfButton
    type="submit"
    className="flex-grow md:flex-grow-0"
    disabled={
      loading || 
      (name === '' || description === '' || price === 0)
    }
    onClick={sendForm}
  >
    Submit
  </SfButton>
</div>

      </div>
    </>
  );
}
