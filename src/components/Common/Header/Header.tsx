import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../hook";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const selector = useAppSelector((state) => state.user.value);
  const currentUser = selector[0];
  const [hover, setHover] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      divRef &&
      divRef.current &&
      !divRef.current.contains(event.target as Node)
    ) {
      setHover(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="z-[100] flex justify-between items-start w-full sticky top-0 bg-bgColor bg-gradient-to-b from-black to-transparent  text-white sm:py-7 py-5 lg:px-32 px-10">
      <div className="w-1/3 gap-x-8 flex flex-row justify-center items-center">
        <Link to="/">
          <span>Logo</span>
        </Link>

        <SearchBar />
      </div>
      <div className=" w-2/3  flex flex-row justify-end items-end">
        {currentUser.id !== "" && (
          <Avatar
            divRef={divRef}
            hover={hover}
            setHover={setHover}
            user={currentUser}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
