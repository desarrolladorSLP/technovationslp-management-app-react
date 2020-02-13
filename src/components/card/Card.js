import React from 'react'
import Button from '../button/Button'
import {createUseStyles} from 'react-jss'
import clsx from 'clsx'

function Card (props){

    const useStyles = createUseStyles({
        Card: {
            width: 280,
            backgroundColor:'#FFFFFF',
            color: 'black',
            borderRadius: 4,
            boxShadow:'0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)'
          },
        
        Header:{
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            textAlign: 'left'
        },
        
        Description:{
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            textAlign: 'left',
            height: 100
        },
        Owners:{
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
        },
        Actions:{
            display:'flex',
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            height: 50,
            textAlign: 'start'
        },
        'Actions > button':{
            marginRight: 8
        },
        cardTitle:{
            fontSize: 24,
            fontWeight: 600,
            color: '#000000de'
        },
        cardSubtitle:{
            fontSize: 14,
            color: '#00000099'
        },
        ownerText:{
            fontSize: 14,
            color: '#000000de'
        }
    })

    const classes=useStyles()

    return <div className = {classes.Card} >
            <div className = {classes.Header}>
                <div className = {classes.cardTitle}>{props.title}</div> 
                
            </div>
                
            <div className ={classes.Description}>
                <div className={classes.cardSubtitle}>{props.description} </div>
            </div>
            <div className= {classes.owners}>
                
                <div className ={classes.ownerText}>{props.owners.map(owner => owner+ ', ')} </div>

                
            </div>
            <div className={classes.Actions}>
            <Button text ='Editar' color='#6d21b0' onlyText onClick={param => console.log('Hello My Friend')}/>
                <Button text ='Eliminar' color='#6d21b0' onlyText onClick={param => console.log('Hello My Friend')}/>
            </div>

            
            </div>

}

export default Card