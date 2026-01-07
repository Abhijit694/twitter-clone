import { IoMdArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";

const Profile = () => {
  return (
    <div className="w-full border-l border-r border-gray-100">

        {/* Profile header - back button,username,search button */}
        <div className="w-full h-14 px-4 py-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Link to='/' className="size-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
                        <IoMdArrowBack size="20"/>
                    </Link>
                    <div className="flex flex-col">
                        <span className="text-lg font-semibold">Name Surname</span>
                        <span className="text-sm text-gray-500">0 posts</span>
                    </div>
                </div>
                <div>
                    <div className="size-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200">
                        <IoIosSearch size="22"/>
                    </div>
                </div>
            </div>
        </div>

        {/* Profile section - cover & profile photo,username,followers & following */}
        <div className="w-full h-85 relative bg-green-300">
            <div className="w-full h-35 bg-gray-300"></div>
            <div className="absolute rounded-full bg-red-300 size-25 top-20 left-5">

            </div>
            <div className="p-3">
                <div className="w-full h-12 flex flex-row-reverse">
                    <button className="w-fit h-9 py-0 px-3 text-sm font-semibold rounded-full border cursor-pointer">Set up profile</button>
                </div>
                <div className="w-full flex flex-col mb-3">
                    <div className="text-xl font-bold">Name Surname</div>
                    <div className="text-sm text-gray-500">@username</div>
                </div>
                <div className="w-full flex items-center gap-2 mb-3">
                    <SlCalender size='16' className="text-gray-500"/>
                    <span className="text-gray-500">Joined Novenber 2025</span>
                    <IoIosArrowForward size='18' className="text-gray-500"/>
                </div>
                <div className="w-full flex gap-4">
                    <div>0 <span className="text-gray-500 text-sm">Following</span></div>
                    <div>0 <span className="text-gray-500 text-sm">Followers</span></div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Profile