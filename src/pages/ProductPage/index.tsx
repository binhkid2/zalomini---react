
import { FC, Suspense } from "react";
import ProductImages from './ProductImages';
import { InfoAndReview } from './InfoAndReview';
import  {AnotherProductsOfThisShop}  from './AnotherProductsOfThisShop';
import  {SimilarProducts}  from './SimilarProducts';
import BackHeader from '../../components/BackHeader';

const ProductPageContent : FC = () => {
    return (
      <>
      <BackHeader/>
<div className="font-[sans-serif] my-20">
      <div className="px-4 ">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImages/>
        <InfoAndReview/>
        </div>
      </div>
      <AnotherProductsOfThisShop/>
      <SimilarProducts/>
    </div>
</>
    )
}


const Fallback: FC = () => {
  return (
      <div className="container px-5 pb-20 mt-36  mx-auto">
      <div className="animate-ping rounded-full bg-green-600 relative h-[350px] sm:h-[500px]"></div>
        </div>
  );
};

export default function ManagePage ()  {
  return (
    <Suspense fallback={<Fallback />}>
      <ProductPageContent />
    </Suspense>
  );
}
