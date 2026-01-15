import { RiTwitterXLine } from "react-icons/ri";
import useBreakpoint from "./hooks/useBreakpoint";
import ModalBox from "./ModalBox";
import { useState } from "react";
import InputBox from "./InputBox";



const SignUpAndSignIn = () => {

    const screens = useBreakpoint()

    const [isSignUpModalOpen,setIsSignUpModalOpen] = useState(false)
    const [isSignInModalOpen,setIsSignInModalOpen] = useState(false)

    const iconSizeValues = {
        sm: '50px',
        md: '50px',
        lg: '400px',
        xl: '400px',
        xxl: '400px',
    }

    const getIconSize = (sizeMap) => {
        if(screens.sm) return sizeMap.sm
        if(screens.md) return sizeMap.md
        if(screens.lg) return sizeMap.lg
        if(screens.xl) return sizeMap.xl
        if(screens.xxl) return sizeMap.xxl
    }

  return (
    <>
        <ModalBox
            isOpen={isSignUpModalOpen}
            onClose={() => setIsSignUpModalOpen(false)}
            title={"Create your account"}
        >
            <div>
                <InputBox id={"name"} type={"text"} label={"Name"}/>
                <InputBox id={"email"} type={"email"} label={"Email"}/>
                <InputBox id={"username"} type={"text"} label={"Username"}/>
                <InputBox id={"password"} type={"text"} label={"Password"}/>
                <InputBox id={"confirm password"} type={"text"} label={"Confirm password"}/>
                <div className="w-full mt-4 flex items-center justify-center">
                    <button className="w-full py-2 bg-black text-white text-xl font-bold rounded-full cursor-pointer">Sign Up</button>
                </div>
            </div>
        </ModalBox>
        <ModalBox
            isOpen={isSignInModalOpen}
            onClose={() => setIsSignInModalOpen(false)}
            title={"Sign in to X"}
            
        >
            <div>
                <InputBox id={"username"} type={"text"} label={"Phone,email address or username"}/>
                <InputBox id={"password"} type={"text"} label={"Password"}/>
                <div className="w-full mt-4 flex items-center justify-center">
                    <button className="w-full py-2 bg-black text-white text-xl font-bold rounded-full cursor-pointer">Login</button>
                </div>
            </div>
        </ModalBox>

        <div className='p-4 lg:h-screen lg:p-0'>
            <div className='p-4 flex flex-col lg:flex-row md:px-30 lg:p-0 lg:w-full lg:h-full mx-auto'>
                <div className="mb-2 lg:flex lg:justify-center lg:items-center lg:w-1/2 lg:h-full">
                    <RiTwitterXLine size={getIconSize(iconSizeValues)}/>
                </div>
                <div className="lg:p-18 lg:w-1/2">
                    <div className="flex flex-col lg:justify-center lg:w-full lg:h-full">
                        <div className="text-5xl md:text-[75px] font-bold my-9 md:my-15">
                            Happening now
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
                            Join today.
                        </div>
                        <div className="mb-4">
                            <button onClick={() => setIsSignUpModalOpen(true)} className="bg-black text-white font-bold rounded-full py-2.5 px-25 cursor-pointer hover:opacity-80">Create account</button>
                        </div>
                        <div className="flex flex-col">
                            <div className="mt-15 mb-4 text-lg font-semibold">
                                Already have an account?
                            </div>
                            <div>
                                <button onClick={() => setIsSignInModalOpen(true)} className="border border-gray-300 font-bold lg:font-semibold rounded-full py-2.5 px-33 hover:bg-gray-200 cursor-pointer">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
  )
}

export default SignUpAndSignIn