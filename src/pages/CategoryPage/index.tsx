
import { SfSelect } from "@storefront-ui/react";
import BackHeader from "../../components/BackHeader";
import { CategoriesTabs } from "../../types/categories";
import { FC, Suspense } from "react";
const options = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price low to high" },
  { label: "Price: High to Low", value: "price high to low" },
  { label: "New Arrivals", value: "new arrivals" },
  { label: "Customer Rating", value: "customer rating" },
  { label: "Bestsellers", value: "bestsellers" },
];
import ScrollableTabs from '../../components/ScrollableTabs';
 const CategoryPageContent:FC =() => {
 return (
    <>
      <BackHeader />
      <ScrollableTabs tabs={CategoriesTabs}/>
      

      <div className="w-full md:max-w-[376px]">
        <p className="  w-full py-2 pl-4 rounded uppercase  font-bold tracking-widest">
          Sort by
        </p>
        <div className="px-4 flex gap-2">
          <SfSelect aria-label="Sort by">
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </SfSelect>
          <SfSelect aria-label="Sort by">
            {options.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </SfSelect>
        </div>
      </div>
    </>
  );
}
const Fallback: FC = () => {
  return (
    <>
      <BackHeader />
      <ScrollableTabs tabs={CategoriesTabs}/>
      <div className="container px-5 pb-20 mt-36  mx-auto">
      <div className="animate-ping rounded-full bg-green-600 relative h-[350px] sm:h-[500px]"></div>
        </div>
    </>
  );
};

export default function CategoryPage ()  {
  return (
    <Suspense fallback={<Fallback />}>
      <CategoryPageContent />
    </Suspense>
  );
}
