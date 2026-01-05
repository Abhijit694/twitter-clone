import { RiTwitterXLine } from "react-icons/ri";
import Avatar from 'react-avatar'

const TopNavbar = ({setDrawerOpen}) => {
  return (
    <>
      {/* Mobile Top Bar with Avatar Button */}
      <div className="fixed top-0 left-0 right-0 h-14 bg-white z-10 flex items-center px-4 md:hidden">
        <Avatar googleId="118096717852922241760" size="30" name="Abhijit Nayak" round={true} 
        onClick={() => setDrawerOpen(true)} />
        <div className="flex flex-1 justify-center">
          <RiTwitterXLine className="text-[22px]"/>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
