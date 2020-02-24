import React from 'react'
import './dropdown.css'
function DropDown (props) {
  const { options, placeholder, selectHandler } = props
  var optionList = React.createRef()
  var dropdownContainer = React.createRef()
  var selected = React.createRef()

  function selectedChange (e) {
    hideOptions()
    const selectedText = e.target.innerHTML
    selectHandler(selectedText)
  }
  function showOptions () {
    optionList.current.style.display = 'flex'
    dropdownContainer.current.focus()
  }
  function hideOptions () {
    optionList.current.style.display = 'none'
  }
  return (
    <>
      <div
        tabIndex={0}
        className='input single-line dropdown-container'
        ref={dropdownContainer}
        onBlur={hideOptions}
        onClick={showOptions}
      >
        <div className='placeholder' ref={selected}>
          {placeholder}
        </div>
      </div>
      <div ref={optionList} className='dropdown-content'>
        {options.map(opt => (
          <a onMouseDown={selectedChange}>{opt}</a>
        ))}
      </div>
    </>
  )
}

export default DropDown
