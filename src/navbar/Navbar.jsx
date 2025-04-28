import { Menu } from "lucide-react";
import Sidebar from "../sidebar/Sidebar";
import { useRef, useState } from "react";

export default function Navbar(){
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    let menuRef = useRef(null);

    function handleMenuBar (){
        console.log("menu button clicked")
        setIsOpenMenu(true);
    }
    return (
        <div ref={menuRef} className="border-2 w-full h-20 flex items-center justify-between p-6">
            <Menu onClick={() =>setIsOpenMenu(true)} className="p-0 cursor-pointer h-12 w-12"/>
            <h1>React</h1>
            
            {isOpenMenu && <Sidebar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} menuRef={menuRef}/>}
            
        </div>
    )
}