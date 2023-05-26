import React, { useCallback, useEffect } from 'react'
import Link from 'next/link'

interface SidebarLinkProps {
  text: string
  to?: string
  level?: number
  clickCallback?: any
  current?: string | null
}

function SidebarLink({
  text,
  to = '',
  level = 0,
  clickCallback = null,
  current = null,
}: SidebarLinkProps) {
  const active = current === to
  function scroll() {
    if (to.length) {
      const elm: any = document.querySelector(to)
      if (elm) {
        const header = document.querySelector('.sticky nav'),
          headerOffset = header ? header.clientHeight : 0
        window.scroll({
          top: Math.abs(elm.offsetTop - headerOffset),
          behavior: 'smooth',
        })
      }
      if (clickCallback) {
        clickCallback(to)
      }
    }
  }

  const scrollCallback = useCallback(scroll, [clickCallback, to])

  useEffect(() => {
    if (window.location.href.indexOf(to) !== -1) {
      scrollCallback()
    }
  }, [scrollCallback, to])

  return (
    <Link
      href={to.length ? to : '#'}
      onClick={scroll}
      className={`block ${
        active ? 'border-red-600' : ''
      } sidebar-item lg:w-max text-lg border-b-2 border-transparent hover:border-red-600 dark:text-white ml-${
        level ? level + 2 : 0
      }`}
    >
      {text}
    </Link>
  )
}

export default SidebarLink
