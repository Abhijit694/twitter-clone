import { useEffect, useState } from "react"


const useBreakpoint = (breakpoints = {}) => {
  const [screenSize,setScreenSize] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false
  })

  const defalutBreakPoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536
  }

  useEffect(() => {
    const mergedBreakpoints = {...defalutBreakPoints,...breakpoints}

    const handleResize = () => {
        const width = window.innerWidth
        setScreenSize({
            sm: width >= 0 && width < mergedBreakpoints.md,
            md: width >= mergedBreakpoints.md && width < mergedBreakpoints.lg,
            lg: width >= mergedBreakpoints.lg && width < mergedBreakpoints.xl,
            xl: width >= mergedBreakpoints.xl && width < mergedBreakpoints.xxl,
            xxl: width >= mergedBreakpoints.xxl,
        })
    }

    handleResize()
    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener('resize',handleResize)

  }, [])

  return screenSize
}

export default useBreakpoint