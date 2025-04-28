import { Menu } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import { useRef, useState } from "react";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  let menuRef = useRef(null);
  return (
    <>
      <div className="fixed top-3 ml-5 sm:ml-8 md:ml-9 lg:ml-13 xl:ml-17 2xl:ml-30 rounded-4xl shadow-2xl border-0 w-[91%] h-20 flex items-center justify-between p-6 z-40 bg-stone-900">
        <Menu
          onClick={() => setIsOpenMenu(true)}
          className="cursor-pointer ml-6 h-12 w-12"
        />
        <div className="xl:text-3xl lg:text-2xl flex gap-6 mr-6">
          <h1 className="cursor-pointer">Home</h1>
          <h1 className="cursor-pointer">React</h1>
        </div>
      </div>
      <div ref={menuRef}>
        {isOpenMenu && (
          <Sidebar
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            menuRef={menuRef}
          />
        )}
      </div>
    </>
  );
}
