import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

const Home = () => {
  return (
    <>
    <div className='flex w-[90%] mx-auto'>
        <LeftSidebar/>
        <Feed/>
        <RightSidebar/>
    </div>
    </>
  )
}

export default Home