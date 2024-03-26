import { FC } from "react";
import BackHeader from "../../components/BackHeader";
import {ManageCard} from "../../components/ManageCard";
import Tabs from "../../components/Tabs";
const ManagePage: FC = () => {
  return (
   <>
   <BackHeader />
   <Tabs/>
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

export default ManagePage;