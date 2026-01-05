import { useRef, useState } from "react";
import Avatar from "react-avatar";
import { LuImage } from "react-icons/lu";

const FeedCreatePost = () => {

  const textAreaRef = useRef(null)
  const [content,setContent] = useState('')

  const handleInput = (e) => {
    if (!textAreaRef.current) return
    const textArea = textAreaRef.current

    textArea.style.height = 'auto'   // reset
    textArea.style.height = `${Math.min(textArea.scrollHeight,300)}px`
  }

  return (
    <>
      <div className="flex gap-2 p-3 border-b border-gray-200">
        <Avatar googleId="118096717852922241760" size="40" name="Abhijit Nayak" round={true} />
        <div className="w-full flex flex-col gap-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            ref={textAreaRef}
            onInput={handleInput}
            className="w-full text-[22px] resize-none rounded-md px-2 outline-none min-h-[50px] max-h-[300px] overflow-auto scrollbar-hide md:text-[20px]"
            placeholder="What's happening?"
          />
          <div className="flex justify-between px-3">
            <div className="w-8 h-8 p-1 rounded-full hover:bg-blue-50 cursor-pointer flex justify-center items-center">
              <LuImage className="text-[15px] text-blue-400"/>
            </div>
            <button
              disabled={!content.trim()}
              className="w-fit bg-black text-white font-semibold rounded-full cursor-pointer py-1.5 px-4 disabled:opacity-50 disabled:cursor-default"  
            >Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCreatePost;
