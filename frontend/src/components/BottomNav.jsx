import { GoHome,GoHomeFill } from "react-icons/go";
import { IoSearchOutline,IoSearch } from "react-icons/io5";
import { PiBookmarkSimple,PiBookmarkSimpleBold } from "react-icons/pi";
import { IoNotificationsOutline,IoNotificationsSharp } from "react-icons/io5"
import { TbMail,TbMailFilled  } from "react-icons/tb";
import { RiQuillPenAiLine } from "react-icons/ri";

const BottomNav = () => {

    const navIcons = [
        {icon: <GoHome size='27px' />, label: "Home"},
        {icon: <IoSearchOutline size='27px' />, label: "Explore"},
        {icon: <IoNotificationsOutline size='27px'/>, label: "Notifications"},
        {icon: <TbMail size='27px' className="stroke-[1.3]" />, label: "Messages"},
    ]
  return (
    <>
        <div className="size-15 fixed right-5 bottom-20 z-10 text-white flex justify-center items-center rounded-full bg-blue-400">
            <RiQuillPenAiLine size='25px'/>
        </div>
        <div className="bg-white border-t backdrop-blur-xs border-gray-200">
            <div className="h-15 flex justify-around items-center py-2">
                {
                    navIcons.map((item) => (
                        <nav key={item.label}>
                            {item.icon}
                        </nav>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default BottomNav