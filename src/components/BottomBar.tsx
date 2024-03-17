import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faListCheck } from "@fortawesome/free-solid-svg-icons/faListCheck";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const nav: {
  title: string;
  url: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}[] = [
  {
    title: "Home",
    url: "/",
    icon: <FontAwesomeIcon icon={faHouse} />,
    activeIcon: <FontAwesomeIcon icon={faHouse} style={{ color: "#008000" }} />,
  },
  {
    title: "Manage",
    url: "/manage",
    icon: <FontAwesomeIcon icon={faListCheck} />,
    activeIcon: (
      <FontAwesomeIcon icon={faListCheck} style={{ color: "#008000" }} />
    ),
  },
  {
    title: "Favorite",
    url: "/favorite",
    icon: <FontAwesomeIcon icon={faHeart} />,
    activeIcon: (
      <FontAwesomeIcon icon={faHeart} style={{ color: "#008000" }} />
    ),
  },
  {
    title: "Profile",
    url: "/profile",
    icon: <FontAwesomeIcon icon={faUser} />,
    activeIcon: (
      <FontAwesomeIcon
        icon={faUser}
        style={{ color: "#008000" }}
      />
    ),
  },
];

export default function BottomBar() {
  const [activeIndex, setActiveIndex] = useState(-1); // Initially, no item is active
  const navigate = useNavigate();
  function navigateUrl(index: number, url: string) {
    setActiveIndex(index);
    navigate(url);
  }
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full py-2 bg-white">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {nav.map((nav, index) => (
            <button
              onClick={() => {
                navigateUrl(index, nav.url);
              }}
              key={index}
              type="button"
              className="inline-flex flex-col gap-1 items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
            >
              {index === activeIndex ? nav.activeIcon : nav.icon}
              <p className="text-xs  text-gray-500 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
                {nav.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
