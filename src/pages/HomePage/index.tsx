import { Link } from "react-router-dom";
import { Categories } from "./Categories";
import { TestComponent } from "./TestComponent";

export default function HomePage() {
  return (
    <>
    <TestComponent/>
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
      <div className="h-96">
        asdasd
      </div>
      <div className="h-96">
        asdasd
      </div>
      <div className="h-96">
        asdasd
      </div>  <div className="h-96">
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
