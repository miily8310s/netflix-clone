interface Props {
  className?: string
}

import React, { useEffect, useState } from 'react'

export const Nav: React.FunctionComponent<Props> = (props: Props) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const handleShow = () => {
      if (window.screenY > 100) {
        setShow(true)
      }
    }
    window.addEventListener('scroll', handleShow)
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [])
  return (
    <div className={`Nav${show ? ' Nav-black' : ''}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  )
}
