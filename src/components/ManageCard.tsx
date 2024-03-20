
import {  SfLink, SfIconDelete } from '@storefront-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";


export default function ManageCard(){

    return (
        <>
        <div className="relative flex border    hover:shadow-lg min-w-[320px] max-w-[640px] p-1 m-4">
        <div className="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
          <SfLink href="#">
            <img
              className="w-full h-auto border rounded-md "
              src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/smartwatch.png"
              alt="alt"
              width="300"
              height="300"
            />
          </SfLink>
          <p className="absolute top-0 left-0 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium">
                Ha Noi-TQ
              </p>
        </div>
        <div className="flex flex-col pl-4 min-w-[180px] flex-1">
          <div className="flex justify-between">
          <SfLink href="#" variant="secondary" className="no-underline typography-text-sm sm:typography-text-lg">
            Smartwatch Fitness Tracker
          </SfLink>
          <button
                aria-label="Remove"
                type="button"
                className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
              >
               <FontAwesomeIcon icon={faEye} size="lg" />
                <span className="hidden ml-1.5 sm:block"> Hide </span>
              </button>
          
          </div>
          <div className="my-2 sm:mb-0">
            <ul className="text-xs font-normal leading-5 sm:typography-text-sm text-neutral-700">
              <li>
                <span className="mr-1">Size:</span>
                <span className="font-medium">6.5</span>
              </li>
              <li>
                <span className="mr-1">Color:</span>
                <span className="font-medium">Red</span>
              </li>
            </ul>
          </div>
          <div className="items-center sm:mt-auto sm:flex">
            <span className="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">$2,345.99</span>
            <div className="flex items-center justify-between mt-4 sm:mt-0">
              <button
                aria-label="Remove"
                type="button"
                className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
              >
                <SfIconDelete />
                <span className="hidden ml-1.5 sm:block"> Remove </span>
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}