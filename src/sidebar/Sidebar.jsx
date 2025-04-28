import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { SidebarMenuItems } from "../constants/SidebarMenuItems";

export default function Sidebar({ isOpenMenu, setIsOpenMenu, menuRef }) {
  function handleCloseMenu(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpenMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseMenu);
    return () => document.removeEventListener("mousedown", handleCloseMenu);
  }, []);

  return (
    <div
      className={`fixed ${
        isOpenMenu ? "" : "hidden"
      } top-0 h-screen w-52 sm:w-52 md:w-72 lg:w-96 xl:w-96 2xl:w-[500px] 2xl:text-3xl left-0 z-50 bg-stone-800`}
    >
      <div className="w-full h-20 flex items-center justify-between p-4">
        <div className="">Machine coding</div>
        <X onClick={() => setIsOpenMenu(false)} className="cursor-pointer" />
      </div>
        <div className="p-4 flex flex-col gap-6 overflow-y-scroll no-scrollbar h-[calc(100%-5rem)]">
          {SidebarMenuItems.map((menuItem) => (
            <div
              key={menuItem.id}
              className="bg-gray-700 cursor-pointer flex justify-between items-center p-4 rounded-2xl"
            >
              {menuItem.item.label}
            </div>
          ))}
        </div>
      </div>
  );
}
