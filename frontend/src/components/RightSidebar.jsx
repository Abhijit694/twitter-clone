import Avatar from "react-avatar";
import { IoIosSearch } from "react-icons/io";

const RightSidebar = () => {
  return (
    <>
        <div className='h-full px-6 pt-2'>
          <div className='flex items-center px-3 border border-gray-300 rounded-full w-full' >
            <IoIosSearch size='20px' className="text-gray-600"/>
            <input type='text' placeholder='Search' className='p-2 outline-none flex-1' />
          </div>
          <div className="my-3 py-2 border border-gray-300 rounded-2xl w-full">
            <h1 className="text-lg font-bold px-4">Who to follow</h1>

            <div className="flex items-center justify-between hover:bg-gray-100 cursor-pointer px-4 py-1 mt-2">
              <div className="flex items-center gap-1">
                <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
                <div className="flex flex-col">
                  <span className="font-bold hover:underline">name</span>
                  <span>@username</span>
                </div>
              </div>
              <button className="w-fit text-sm font-bold text-white bg-black rounded-full px-3 py-2 cursor-pointer">
                follow
              </button>
            </div>

            <div className="flex items-center justify-between hover:bg-gray-100 cursor-pointer px-4 py-1 mt-2">
              <div className="flex items-center gap-1">
                <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
                <div className="flex flex-col">
                  <span className="font-bold hover:underline">name</span>
                  <span>@username</span>
                </div>
              </div>
              <button className="w-fit text-sm font-bold text-white bg-black rounded-full px-3 py-2 cursor-pointer">
                follow
              </button>
            </div>

            <div className="flex items-center justify-between hover:bg-gray-100 cursor-pointer px-4 py-1 mt-2">
              <div className="flex items-center gap-1">
                <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
                <div className="flex flex-col">
                  <span className="font-bold hover:underline">name</span>
                  <span>@username</span>
                </div>
              </div>
              <button className="w-fit text-sm font-bold text-white bg-black rounded-full px-3 py-2 cursor-pointer">
                follow
              </button>
            </div>

            <span className="text-blue-400 px-4 cursor-pointer">See more</span>
          </div>
        </div>
    </>
  )
}

export default RightSidebar