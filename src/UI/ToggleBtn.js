import React, { useState, useEffect } from 'react'

const ToggleBtn = ({
  index,
  contextData,
  active,
  setActive
}) => {
  const [activeToggle, setActiveToggle] = useState(false)

  const handleActive = () => {
    setActiveToggle(!activeToggle)
    setActive(!active)
  }

  useEffect(() => {
    if (contextData && contextData[index].active === true) {
      setActiveToggle(true)
    }
  }, [index, contextData])

  return (
    <div className='toggle-container' onClick={handleActive}>
      <div className={activeToggle ? 'inner-rail-active' : 'inner-rail'}>
        <div className={activeToggle ? 'inner-circle-active' : 'inner-circle'}></div>
      </div>
    </div>
  )
}

export default ToggleBtn