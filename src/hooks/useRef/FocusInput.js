import React, {  useRef, useEffect } from 'react'

const FocusInput = () => {
    const FocusRef = useRef(null)

    useEffect(() => {
        FocusRef.current.focus()
    })
  return (
    <div>
        <input type="text" ref={FocusRef} />
    </div>
  )
}

export default FocusInput