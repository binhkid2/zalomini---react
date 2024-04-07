
import { SfLink } from '@storefront-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, Suspense } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { SfDropdown, useDisclosure } from '@storefront-ui/react';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { ManageCardProps } from '../types/products';
const image_404 = import.meta.env.VITE_404_IMAGE;

  const ManageCardContent: FC<ManageCardProps> = ({
    address,
    name,
    price,
    createdAt,
    images,
    description,
    _id,
  }) => {
    const { isOpen, toggle, close } = useDisclosure();
    return (
        <>
        <p className='hidden'>{_id}</p>
        <p className='hidden'>{createdAt}</p>
       <div className='border hover:shadow-lg  p-1 m-4'>
       <div className="relative flex ">
        <div className="relative overflow-hidden rounded-md ">
          <SfLink href="#">
            <img
              className="w-36 md:w-48 h-36 md:h-48 object-cover border rounded-md "
              src={(images && images[0]?.src) || image_404 }
              alt={ (images && images[0]?.alt) || ""}
            />
          </SfLink>
          <p className="absolute top-0 left-0 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium">
                {address}
              </p>
        </div>
        <div className="flex flex-col pl-4 min-w-[180px] flex-1">
          <div className="flex justify-between">
          <SfLink href="#" variant="secondary" className="text-xs no-underline typography-text-sm sm:typography-text-lg font-bold w-full truncate">
            {name}
          </SfLink>
          
              <SfDropdown trigger={<button className='mr-2' onClick={toggle}><FontAwesomeIcon icon={faEllipsis} size="lg" style={{color: "#04711a",}} /></button>} open={isOpen} onClose={close}>
      <ul className=" p-2 rounded bg-gray-100 w-max">
        <li className='h-5 text-xs ' onClick={()=>{console.log("Hide")}}>Ẩn tin</li>
        <li className='h-5 text-xs ' onClick={()=>{console.log("delete")}}>Xóa tin</li>
        <li className='h-5 text-xs ' onClick={()=>{console.log("Pro")}}>Nâng cấp lên pro</li>
      </ul>
    </SfDropdown>
          
          </div>
          <div className="my-2 sm:mb-0">
            <p className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700 two-line-paragraph ">
             {description}
            </p>
          </div>
          <div className="items-center sm:mt-auto sm:flex">
            <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg mr-3">{price} đ</span>
            <div className="flex items-center justify-between mt-4 sm:mt-0">
            <button
                aria-label="edit"
                type="button"
                className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
              >
                <FontAwesomeIcon icon={faPen} size="lg" />
                <span className="hidden ml-1.5 sm:block"> Edit </span>
              </button>
            </div>
          </div>
        </div>
      </div>
       </div>
        </>
    )
}

export const FallbackManageCard :FC = ()=>{

  return(
    <div className="anim-float-card px-1 md:px-3 relative ">
    <div className="block card card-hover space-y-2 p-2 w-40 ">
      <div className="group relative block">
        <div className="animate-ping rounded-full bg-green-600 relative h-[150px] sm:h-[250px]"></div>
      </div>
    </div>
  </div>
  )
}

export const ManageCard: FC<ManageCardProps> = (props) => {
  return (
    <Suspense fallback={<FallbackManageCard />}>
      <ManageCardContent {...props} />
    </Suspense>
  );
};