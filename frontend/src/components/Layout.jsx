import { useState } from 'react'
import BottomNav from './BottomNav'
import MobileSidebar from './MobileSidebar'
import RightSidebar from './RightSidebar'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import Feed from './Feed'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const hideTopNavbarRoutes = ['/profile']
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
        <div className='container mx-auto md:px-10 lg:px-8 xl:px-4'>
          {/* Mobile View */}
          <div className='md:hidden'>
            {/* TopNavbar with profile icon*/}
            <div>
              {
                !(hideTopNavbarRoutes.includes(location.pathname)) && (
                  <TopNavbar setDrawerOpen={setDrawerOpen}/>
                )
              }
            </div>
            {/* Slide-in Sidebar */}
            <div className='md:hidden'>
              <MobileSidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
            </div>
            {/* Feed */}
            <div>
              <Outlet/>
            </div>
            {/* Bottom Nav */}
            <div className='md:hidden fixed bottom-0 left-0 right-0 z-10'>
              <BottomNav/>
            </div>
          </div>


          {/* Large Screen View ( md,lg,xl,2xl ) - Hidden on Small devices */}
          <div className='hidden md:flex'>
            {/* Sidebar - for medium amd large devices */}
            <div className='w-[10%] pt-4 xl:w-[22%] xl:py-3'>
              <Sidebar/>
            </div>
            {/* Feed */}
            <div className='flex flex-1'>
              <Outlet/>
            </div>
            {/* Right Sidebar - for large divices */}
            <div className='w-[30%] hidden lg:block top-0 right-0'>
              <RightSidebar/>
            </div>
          </div>
        </div>
    </>
  )
}

export default Layout