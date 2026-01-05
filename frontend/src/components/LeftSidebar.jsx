import { RiTwitterXLine } from "react-icons/ri";
import { GoHome,GoHomeFill } from "react-icons/go";
import { IoSearchOutline,IoSearch } from "react-icons/io5";
import { IoNotificationsOutline,IoNotificationsSharp } from "react-icons/io5";
import { TbMail,TbMailFilled  } from "react-icons/tb";
import { PiBookmarkSimple,PiBookmarkSimpleBold } from "react-icons/pi";
import { BsPerson,BsPersonFill } from "react-icons/bs";
import Avatar from 'react-avatar'

const LeftSidebar = () => {
  return (
    <>
        <div className="w-[20%] h-screen">
            <div className="ml-5 my-4 h-[5%]">
                <RiTwitterXLine className='font-thin text-[30px]'/>
            </div>
            <div className="h-[45%]">
                <div className="w-fit flex items-center gap-4 py-2 px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                    <GoHome size="24px" />
                    <h1 className="text-[18px]">Home</h1>
                </div>
                <div className="w-fit flex items-center gap-3 py-2 px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                    <IoSearchOutline size="24px" />
                    <h1 className="text-[18px]">Explore</h1>
                </div>
                <div className="w-fit flex items-center gap-3 py-2 px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                    <IoNotificationsOutline size="24px" />
                    <h1 className="text-[18px]">Notification</h1>
                </div>
                <div className="w-fit flex items-center gap-3 py-2 px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                    <TbMail size="24px" className="stroke-[1.5]"/>{/* stroke is used to set the visual thickness of lines in icons*/}
                    <h1 className="text-[18px]">Message</h1>
                </div>
                <div className="w-fit flex items-center gap-3 py-2 px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                    <PiBookmarkSimple size="24px"/>
                    <h1 className="text-[18px]">Bookmarks</h1>
                </div>
                <div className="w-fit flex items-center gap-3 py-2 px-5 hover:bg-gray-200 rounded-full cursor-pointer">
                    <BsPerson size="24px" />
                    <h1 className="text-[18px]">Profile</h1>
                </div>
            </div>
            <div className="h-[40%] mt-3 flex flex-col justify-between items-center">
                <button className="w-[85%] bg-black text-white font-semibold text-[18px] flex items-center justify-center py-2.5 rounded-full cursor-pointer">Post</button>
                <div className="w-[90%] py-2 px-5 flex items-center gap-2 hover:bg-gray-200 hover:rounded-full cursor-pointer">
                    <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
                    <div className="flex flex-col gap-0.5">
                        <span className="text-sm">Name Surname</span>
                        <span className="text-sm">@username</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LeftSidebar