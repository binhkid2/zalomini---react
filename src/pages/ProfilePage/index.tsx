import { Link } from "react-router-dom";
import { HelloUser } from "./HelloUser";
import { BuyService } from "./BuyService";
import { StatTable } from "./StatTable";

export default function ProfilePage() {
    return (
      <>
      <HelloUser/>
      <BuyService/>
      <StatTable/>
        <h1 className="text-3xl font-bold underline">ProfilePage</h1>
        <Link  to={'/'}>Home Page</Link>
      </>
    );
  }
  