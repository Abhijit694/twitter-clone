import { RiTwitterXLine } from "react-icons/ri";
import { GoHome,GoHomeFill } from "react-icons/go";
import { IoSearchOutline,IoSearch } from "react-icons/io5";
import { IoNotificationsOutline,IoNotificationsSharp } from "react-icons/io5";
import { TbMail,TbMailFilled  } from "react-icons/tb";
import { PiBookmarkSimple,PiBookmarkSimpleBold } from "react-icons/pi";
import { BsPerson,BsPersonFill } from "react-icons/bs";
import { RiQuillPenAiLine } from "react-icons/ri";
import Avatar from 'react-avatar'

const Sidebar = () => {
    const navItems = [
        {icon: <GoHome size="27px"/>, label: "Home" },
        {icon: <IoSearchOutline size="27px"/>, label: "Explore" },
        {icon: <IoNotificationsOutline size="27px"/>, label: "Notifications" },
        {icon: <TbMail size="27px" className="stroke-[1.3]"/>, label: "Messages" },
        {icon: <PiBookmarkSimple size="27px"/>, label: "Bookmarks" },
        {icon: <BsPerson size="27px"/>, label: "Profile" }
    ]
  return (
    <>
        <div className="h-[96vh] border-r border-gray-200 flex flex-col justify-between">
            <div>
                {/* Logo */}
                <div className='px-2.5 xl:px-5 mb-3'>
                    <RiTwitterXLine className='text-[30px]' />
                </div>
                
                {/* Menu Items */}
                <div className=" flex flex-col gap-3">
                    <div className="flex flex-col">
                        {
                            navItems.map((item) => (
                                <nav key={item.label} className="w-fit flex items-center gap-3 md:p-2.5 xl:py-2.5 xl:px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                                    {item.icon}
                                    <span className="text-[20px] hidden xl:block">{item.label}</span>
                                </nav>
                            ))
                        }
                        <div className="-ml-1 mt-2 xl:hidden">
                            <div className="text-white bg-black size-14 flex justify-center items-center rounded-full">
                                <RiQuillPenAiLine size='26px'/>
                            </div>
                        </div>
                        
                    </div>
                    <button className="hidden w-[78%] bg-black text-white font-semibold text-[18px] xl:flex items-center justify-center py-2.5 rounded-full cursor-pointer">Post</button>
                </div>
            </div>
     
            <div className="h-15 w-12 md:p-2 xl:w-[90%] xl:p-3 flex md:justify-center xl:justify-normal items-center gap-2 hover:bg-gray-200 hover:rounded-full cursor-pointer">
                <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
                <div className="hidden xl:flex flex-col">
                    <span className="text-sm font-bold">Name Surname</span>
                    <span className="text-sm">@username</span>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Sidebar