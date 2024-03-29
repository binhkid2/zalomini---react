import {
    SfButton,
    SfRating,
    SfCounter,
    SfLink,
    SfIconShoppingCart,
    SfIconFavorite,
  } from "@storefront-ui/react";
import { FC, Suspense } from "react";
  
    const FavoriteCardContent: FC = () => {
    return (
      <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
        <div className="relative">
          <SfLink href="#" className="block">
            <img
              src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/sneakers.png"
              alt="Great product"
              className="object-cover h-auto rounded-md aspect-square"
              width="300"
              height="300"
            />
          </SfLink>
          <p className="absolute top-2 left-2 z-10 whitespace-nowrap bg-yellow-400 px-3 py-1 text-xs font-medium">
            Ha Noi-TQ
          </p>
          <SfButton
            variant="tertiary"
            size="sm"
            square
            className="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
            aria-label="Add to wishlist"
          >
            <SfIconFavorite size="sm" />
          </SfButton>
        </div>
        <div className="p-4 border-t border-neutral-200">
          <SfLink href="#" variant="secondary" className=" no-underline">
            Athletic mens walking sneakers
          </SfLink>
          <div className="flex items-center pt-1">
            <SfRating size="xs" value={5} max={5} />
  
            <SfLink href="#" variant="secondary" className="pl-1 no-underline">
              <SfCounter size="xs">{123}</SfCounter>
            </SfLink>
          </div>
          <p className="text-xs block py-2 font-normal typography-text-sm text-neutral-700">
            Lightweight • Non slip • Flexible outsole • Easy to wear on and off
          </p>
          <span className="block pb-2 font-bold typography-text-lg">
            $2345,99
          </span>
          <SfButton className="text-xs" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
            Add to cart
          </SfButton>
        </div>
      </div>
    );
  }
  
 export const FallbackFavoriteCard: FC = () => {
    return (
      <div className="anim-float-card relative ">
      <div className="group block card card-hover bg-base-300 shadow-xl py-3 px-3">
      <div className="animate-ping   h-40 rounded-full bg-green-600"></div>
      </div>
    </div>
    );
  };

  export const FavoriteCard: FC = () => {
    return (
      <Suspense fallback={<FallbackFavoriteCard />}>
        <FavoriteCardContent />
      </Suspense>
    );
  };