

const InputBox = ({id,type,label}) => {
  return (
    <>
        <div className="w-full h-15 relative rounded-sm border border-gray-300 focus-within:border-blue-400 focus-within:border-2 px-3 pt-3.5 mb-3">
            <input  id={id} type={type} placeholder="Kuch bhi koi farak nahi" className="w-full px-2 peer h-10 focus:outline-none  placeholder-transparent"/>
            <label htmlFor={id} 
                className="absolute
                -top-px
                left-5
                text-gray-700
                text-sm
                transition-all
                peer-placeholder-shown:text-base
                peer-placeholder-shown:top-4
                peer-focus:-top-px
                peer-focus:left-5
                peer-focus:text-sm
                peer-focus:text-blue-500"
            >{label}</label>
        </div>
    </>
  )
}

export default InputBox