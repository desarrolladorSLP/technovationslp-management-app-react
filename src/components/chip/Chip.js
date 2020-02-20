import React from 'react'
import { createUseStyles } from 'react-jss'

function Chip (props) {
  const { text, onClick } = props
  const useStyles = createUseStyles({
    chip: {
      height: 20,
      borderRadius: 16,
      paddingLeft: 12,
      paddingRight: 8,
      paddingTop: 6,
      paddingBottom: 6,
      margin: 4,
      display: 'inline-flex',
      backgroundColor: '#0000001f'
    },
    closeButton: {
      marginLeft: 8,
      color: '#969696',
      fontSize: 20,
      '&:hover': {
        color: '#808080'
      },
      cursor: 'pointer'
    }
  })
  const classes = useStyles()

  function clickHandler () {
    onClick()
  }
  return (
    <div className={classes.chip}>
      {text}
      <div
        className={classes.closeButton + ' material-icons'}
        onClick={onClick ? clickHandler : null}
      >
        cancel
      </div>
    </div>
  )
}

export default Chip
