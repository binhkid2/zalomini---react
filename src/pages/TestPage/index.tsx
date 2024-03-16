import { Link } from "react-router-dom";

export default function TestPage() {
    return (
      <>
        <h1 className="text-3xl font-bold underline">TestPage</h1>
        <Link  to={'/'}>Home Page</Link>
      </>
    );
  }
  