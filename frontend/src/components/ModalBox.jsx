import { RxCross2 } from "react-icons/rx";
import { RiTwitterXLine } from "react-icons/ri";

const ModalBox = ({isOpen,onClose,title,children}) => {

    const modalSize =
        title === 'Create your account'
            ? `
            w-[90%] sm:w-[80%] md:w-[70%] lg:w-[48%]
            min-h-[70vh] lg:min-h-[80vh]
            `
            : `
            w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]
            min-h-[50vh] lg:min-h-[60vh]
            `

    if(!isOpen) return null

    return ( 
        <div className="fixed inset-0 bg-gray-600/30 backdrop-blur-sm flex justify-center items-center z-10"
        // onClick={onClose}
        >
            <div className={`${modalSize} bg-white p-6 rounded-4xl shadow-xl z-20`}>
                <div className="flex items-center mb-4">
                    <div className="w-[45%]">
                        <div onClick={onClose} className="size-8 flex justify-center items-center rounded-full text-gray-400 hover:cursor-pointer hover:bg-gray-100 hover:text-black"><RxCross2 size='18px'/></div>
                    </div>
                    <div className="w-[10%] flex justify-center items-center">
                        <RiTwitterXLine size="30px"/>
                    </div>
                </div>
                
                <div className="mx-auto sm:w-[80%] md:w-[74%] lg:w-[64%]">
                    <div className="text-4xl font-semibold mb-8">{title}</div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default ModalBox