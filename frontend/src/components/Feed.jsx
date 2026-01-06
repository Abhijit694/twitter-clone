import FeedCreatePost from './FeedCreatePost'
import Tweet from './Tweet'
// import Tweets from './Tweets'

const Feed = () => {
  return (
    <>
        <div className='w-full border-l border-r border-gray-200 mt-10 md:mt-0'>
            <div className='h-12 flex items-center justify-around'>
                <div className='w-1/2 h-full flex justify-center items-center border-b border-gray-100 cursor-pointer hover:bg-gray-200'>
                    <div className='w-fit h-full flex justify-center items-center border-b-4 border-blue-400 text-[15px] font-semibold text-gray-600'>
                        For you
                    </div>
                </div>
                <div className='w-1/2 h-full flex justify-center items-center border-b border-gray-100 cursor-pointer hover:bg-gray-200'>
                    <div className='w-fit h-full flex justify-center items-center border-b-4 border-blue-400 text-[15px] font-semibold text-gray-600'>
                        Following
                    </div>
                </div>
            </div>
            <div>
                <FeedCreatePost/>
            </div>
            <div>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
            </div>
        </div>
    </>
  )
}

export default Feed