
import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-xs sm:text-sm  flex flex-row   my-5 ml-2 ">


        <div className="flex-grow item-center place-self-center">
          <div className="w-11/12 relative">
          <input
            type="text"
            className="border pl-3 w-full py-2"
            placeholder="Tìm kiếm sản phẩm,shop bán hàng..."
            onFocus={() => navigate("/search")}
          />
           <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="absolute right-0 top-0 mt-2.5 mr-4"/>
          </div>
        </div>

        <div className=" w-20">
          <span className="inline-flex overflow-hidden rounded-md  shadow-sm">
            <button
              className="inline-block  py-2 px-3 text-gray-700 hover:bg-green-700 focus:relative"
              title="Manage"
              onClick={()=>{navigate('/manage')}}
            >
              <FontAwesomeIcon icon={faListCheck} size="lg" />
            </button>

            <button
              className="inline-block py-2 px-3 text-gray-700 hover:bg-green-700 focus:relative"
              title="User Profile"
              onClick={()=>{navigate('/profile')}}
            >
             <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
            
          </span>
        </div>
      </div>
    </>
  );
}
