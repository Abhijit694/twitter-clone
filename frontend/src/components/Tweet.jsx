import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoHeartOutline,IoHeart } from "react-icons/io5";
import { PiBookmarkSimple,PiBookmarkSimpleBold } from "react-icons/pi";
import Avatar from "react-avatar"
import { PiDotLight } from "react-icons/pi";
import { PiDotOutlineFill } from "react-icons/pi";
import { LuDot } from "react-icons/lu";


const Tweet = () => {
  return (
    <>
        <div className="w-full p-3 flex gap-3">
            <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
            <div className="w-full flex flex-col text-[17px]">
                <div className="flex items-center gap-1">
                  <div className="font-bold">name</div>
                  <div className="flex items-center">
                    <div className="text-gray-600">@username</div>
                    <LuDot/>
                    <div className="text-gray-600">upload-time</div>
                  </div>
                </div>
                <div>This is a sample text</div>
                {/* if image available shown here */}
                ------------------------------------
                {/* Like share comment */}
                <div className="width-full flex items-center justify-between text-[17px]">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-blue-100">
                      <FaRegComment
                        size='17px'
                        className="stroke-[0.7px]"
                      />
                    </div>
                    <span>0</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-green-500">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-green-100">
                      <BiRepost size='25px'/>
                    </div>
                    <span>0</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-red-100">
                      <IoHeartOutline size='20px'/>
                    </div>
                    <span>0</span>
                  </div>
                  <div className="flex items-center cursor-pointer hover:text-blue-500">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-blue-100">
                      <PiBookmarkSimple size='20px'/>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Tweet