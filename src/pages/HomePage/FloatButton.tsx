import {  faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function FloatButton() {
  return (
     <>
    <div className = " fixed bottom-14 z-50 right-0 p-2  flex items-end justify-end w-24 h-24 ">
   
    <div className = "text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 z-50 absolute  ">
    <FontAwesomeIcon icon={faSquarePlus} />
    </div>
</div>
     </>
  );
}