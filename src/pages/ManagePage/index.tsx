import { FC, Suspense } from "react";
import BackHeader from "../../components/BackHeader";
import {FallbackManageCard, ManageCard} from "../../components/ManageCard";
import Tabs from "../../components/Tabs";
import { useParams } from 'react-router-dom'
import { ManageTabs } from "../../types/manageTabs";
const ManagePageContent: FC = () => {
  const params = useParams()
  return (
   <>
   id: {params.id}
    <BackHeader />
  <Tabs tabs={ManageTabs}  />
  <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
  <ManageCard/>
</div>

   </>
  );
};

const Fallback: FC = () => {
  const params = useParams()
  return (
    <>
      <BackHeader />
      {params.id}
      <Tabs tabs={ManageTabs} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-2/3 gap-2 md:gap-6 grid-flow-row scroll-smooth overflow-auto hide-scrollbar mx-auto">
        <FallbackManageCard />
      </div>
    </>
  );
};

export default function ManagePage ()  {
  return (
    <Suspense fallback={<Fallback />}>
      <ManagePageContent />
    </Suspense>
  );
}
