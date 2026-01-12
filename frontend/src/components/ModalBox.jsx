import { RxCross2 } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";

const ModalBox = ({isOpen,onClose,children}) => {
    if(!isOpen) return null

    return ( 
        <div className="fixed inset-0 bg-gray-200/30 backdrop-blur-sm flex justify-center items-center z-10"
        // onClick={onClose}
        >
            <div className="bg-white p-6 rounded-4xl shadow-xl w-[48%] z-20">
                <div className="flex items-center mb-4">
                    <div className="w-[45%]">
                        <div onClick={onClose} className="size-8 flex justify-center items-center rounded-full text-gray-400 hover:cursor-pointer hover:bg-gray-100 hover:text-black"><RxCross2 size='18px'/></div>
                    </div>
                    <div className="w-[10%] flex justify-center items-center">
                        <RiTwitterXLine size="30px"/>
                    </div>
                </div>
                
                <div>{children}</div>
            </div>
        </div>
    )
}

export default ModalBox