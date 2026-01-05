
import { BsPerson } from "react-icons/bs";
import { PiBookmarkSimple } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import Avatar from 'react-avatar'

const MobileSidebar = ({isOpen,onClose}) => {

  const drawerItems = [
    {icon: BsPerson, label: "Profile"},
    {icon: PiBookmarkSimple, label: "Bookmarks"},
    {icon: IoSettingsOutline, label: "Settings"},
    {icon: BiLogIn, label: "Logout"}
  ]

  return (
    <>
    {
      isOpen && (
        <div className='fixed inset-0 bg-black/50 z-20 md:hidden' onClick={onClose} />
      )
    }
    {/* Sliding panel */}
      <div className={`fixed top-0 left-0 h-full w-[65%] bg-white z-50 transform transition-transform md:hidden ${ isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-4'>
            <div className='flex flex-col gap-2'>
              <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
              <div className='flex flex-col'>
                <span className='text-[17px] font-semibold'>Name Surname</span>
                <span className='text-sm'>@username</span>
              </div>
              <div className='flex items-center gap-2'>
                <div>
                  <span className='font-semibold'>0 </span>
                  <span className='text-gray-500'>Following</span>
                </div>
                <div>
                  <span className='font-semibold'>0 </span>
                  <span className='text-gray-500'>Followers</span>
                </div>
              </div>
            </div>

            {/* Nav items */}
            <div className="flex flex-col gap-4 mt-4">
              {
                drawerItems.map((item) => (
                  <nav key={item.label} className="flex items-center gap-3" >
                    <item.icon size='33px' />
                    <span className="text-xl font-semibold">{item.label}</span>
                  </nav>
                ))
              }
            </div>
        </div>
      </div>
    </>
  )
}

export default MobileSidebar