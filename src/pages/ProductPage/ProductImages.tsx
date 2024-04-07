import { useEffect, useState } from 'react';
import {
  SfScrollable,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  type SfScrollableOnDragEndData,
} from '@storefront-ui/react';
import classNames from 'classnames';
import axios from "axios";
import { ProductCard1Props, initProduct1 } from '../../types/products';
import { useParams } from 'react-router-dom';
import DefaultFallback from '../../components/DefaultFallBack';
import ModalImage from '../../components/ModalImage';
import  { ImagesListType } from 'react-spring-lightbox';
export default function ProductImages() {
// Inside your component
const { id } = useParams(); // Assuming "id" is the parameter you want to access
const get1Product = `${import.meta.env.VITE_NODEJS_BACKEND}/products/${id}`;
  const [activeIndex, setActiveIndex] = useState(0);
  const [product, setProduct] = useState<ProductCard1Props >(initProduct1);
  const [loading, setLoading] = useState(true);
  // Inside your component
const [openModal, setOpenModal] = useState(false);

function handleOpenModal() {
  setOpenModal(!openModal); // Toggle the value of openModal
}

const imagesArray:ImagesListType = product.images.map(item => ({
  alt: item.alt,
  loading: 'lazy',
  src: item.src
}));
  async function fetchProduct() {
    try {
      const response = await axios.get(get1Product);
      setProduct(response.data);
      console.log(response.data.images)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const onDragged = (event: SfScrollableOnDragEndData) => {
    if (event.swipeRight && activeIndex > 0) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex - 1);
    } else if (event.swipeLeft && activeIndex < product.images.length - 1) {
      setActiveIndex((currentActiveIndex) => currentActiveIndex + 1);
    }
  };

  return (
    <>
     {openModal && <ModalImage images={imagesArray}/>}
   
    <div className="relative flex flex-col w-full max-h-[600px] aspect-[4/3]">
       
      <SfScrollable
        className="w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        activeIndex={activeIndex}
        wrapperClassName="h-full min-h-0"
        buttonsPlacement="none"
        isActiveIndexCentered
        drag={{ containerWidth: true }}
        onDragEnd={onDragged}
      >
        
        {loading ? (
  <DefaultFallback />
) : (
  product.images.map(({ src, alt }, index) => (
    <div key={`${alt}-${index}`} className="flex justify-center h-full basis-full shrink-0 grow snap-center" onClick={()=>{handleOpenModal()}}>
      <img
        aria-label={alt}
        aria-hidden={activeIndex !== index}
        className="w-auto h-full"
        alt={alt}
        src={src}
      />
    </div>
  ))
)}

      </SfScrollable>
      <SfScrollable
        className="items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        activeIndex={activeIndex}
        buttonsPlacement="floating"
        slotPreviousButton={
          <SfButton
            className="absolute disabled:hidden !rounded-full z-10 left-4 bg-white"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronLeft size="sm" />}
          />
        }
        slotNextButton={
          <SfButton
            className="absolute disabled:hidden !rounded-full z-10 right-4 bg-white"
            variant="secondary"
            size="sm"
            square
            slotPrefix={<SfIconChevronRight size="sm" />}
          />
        }
      >
        {product.images.map(({ src, alt }, index) => (
          <button
            type="button"
            aria-label={alt}
            aria-current={activeIndex === index}
            key={`${alt}-${index}-thumbnail`}
            className={classNames(
              'md:w-14 md:h-auto relative shrink-0 pb-1 my-2 -mr-2 border-b-4 snap-start cursor-pointer focus-visible:outline focus-visible:outline-offset transition-colors flex-grow md:flex-grow-0',
              activeIndex === index ? 'border-primary-700' : 'border-transparent',
            )}
            onClick={() => setActiveIndex(index)}
          >
            <img
              alt={alt}
              className="object-contain border border-neutral-200 w-14  h-14 xs:w-20 xs:h-20 "
              src={src}
            />
          </button>
        ))}
      </SfScrollable>
    </div>
    </>
  );
}