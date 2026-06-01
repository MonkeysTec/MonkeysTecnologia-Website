import { useLayoutEffect } from 'react'

export function useLockHorizontalScroll() {
  useLayoutEffect(() => {
    const lockHorizontalScroll = () => {
      document.documentElement.scrollLeft = 0
      document.body.scrollLeft = 0

      if (window.scrollX !== 0) window.scrollTo(0, window.scrollY)
    }

    lockHorizontalScroll()
    window.addEventListener('scroll', lockHorizontalScroll, { passive: true })
    window.addEventListener('resize', lockHorizontalScroll)
    window.addEventListener('orientationchange', lockHorizontalScroll)

    return () => {
      window.removeEventListener('scroll', lockHorizontalScroll)
      window.removeEventListener('resize', lockHorizontalScroll)
      window.removeEventListener('orientationchange', lockHorizontalScroll)
    }
  }, [])
}
