import React from 'react'
import Button from '../button'
import { createUseStyles } from 'react-jss'

function Card (props) {
  const { title, actions, content } = props
  const useStyles = createUseStyles({
    card: {
      width: 300,
      backgroundColor: '#FFFFFF',
      color: 'black',
      borderRadius: 4,
      display: 'flex',
      flexDirection: 'column',
      boxShadow:
        '0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)'
    },

    header: {
      paddingTop: 16,
      paddingLeft: 16,
      paddingRight: 16,
      textAlign: 'left'
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 600,
      color: '#000000de'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 24,
      paddingLeft: 16,
      paddingRight: 16,
      textAlign: 'left'
    },
    actions: {
      display: 'flex',
      paddingTop: 24,
      paddingLeft: 8,
      paddingRight: 8,
      height: 44,
      textAlign: 'start',
      marginTop: 'auto'
    },
    'actions > button': {
      marginRight: 8
    }
  })

  const classes = useStyles()

  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.cardTitle}>{title}</div>
      </div>
      <div className={classes.content}>{content}</div>
      <div className={classes.actions}>
        {actions.map(action => {
          return (
            <Button
              text={action.name}
              color='#6d21b0'
              onlyText
              onClick={action.handler}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Card
