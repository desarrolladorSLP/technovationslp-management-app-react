import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

function Button (props) {
  const { text, color, onClick, outlined, onlyText } = props
  const useStyles = createUseStyles({
    container: {
      minWidth: 64,
      height: 36,
      paddingLeft: 16,
      paddingRight: 16,
      border: 'none',
      borderRadius: 4,
      backgroundColor: color,
      '& div': {
        color: 'white'
      },
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      color: 'black',
      outline: 'none',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: color
      }
    },
    text: {
      color: color,
      fontSize: 14,
      fontFamily: 'inherit',
      fontWeight: 500
    },
    outlined: {
      border: '1px solid ' + color,
      backgroundColor: 'transparent',
      '& div': {
        color: color
      },
      '&:hover': {
        backgroundColor: '#f6f6f6'
      }
    },
    onlyText: {
      border: 'none',
      backgroundColor: 'transparent',
      leftPadding: 8,
      rightPadding: 8,
      '& div': {
        color: color
      },
      '&:hover': {
        backgroundColor: '#f6f6f6'
      }
    }
  })

  const classes = useStyles()

  function clickHandler () {
    onClick()
  }

  return (
    <button
      className={clsx(classes.container, {
        [classes.outlined]: outlined,
        [classes.onlyText]: onlyText
      })}
    >
      <div className={classes.text} onClick={onClick ? clickHandler : null}>
        {text.toUpperCase()}
      </div>
    </button>
  )
}

export default Button
