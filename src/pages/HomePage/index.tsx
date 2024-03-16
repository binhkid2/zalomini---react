import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">HomePage</h1>
      <Link  to={'/test'}>Test Page</Link>
      <div className="h-96">
        asdasd
      </div>
      <div className="h-96">
        asdasd
      </div>
      <div className="h-96">
        asdasd
      </div>
    </>
  );
}
