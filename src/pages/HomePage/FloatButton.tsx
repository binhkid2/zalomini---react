import {  faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function FloatButton() {
  const navigate = useNavigate();
  return (
     <>
    <div className = " fixed bottom-14 z-50 right-0 p-2  flex items-end justify-end w-24 h-24 " onClick={() => { navigate('/post') }}>
   
    <div className = "text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 z-50 absolute  ">
    <FontAwesomeIcon icon={faSquarePlus} size="lg" />
    </div>
</div>
     </>
  );
}