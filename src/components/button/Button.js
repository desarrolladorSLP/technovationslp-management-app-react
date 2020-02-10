import React from 'react'
import {createUseStyles} from 'react-jss'
import clsx from 'clsx'


function Button (props){

    const useStyles = createUseStyles({
        container:{
            minWidth: 64,
            height:36,
            paddingLeft: 16,
            paddingRight: 16,
            border:'none',
            borderRadius:4,
            backgroundColor:props.color,
            '& div':{
                color:'white'
            },
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            color:'black',
            outline: 'none',
            '&:hover':{
                cursor:'pointer',
                backgroundColor: props.color
            }
            
    
        },
        text:{
            color:props.color,
            fontSize:14,
            fontFamily:'inherit',
            fontWeight:500
        },
        outlined:{
            border: '1px solid ' + props.color,
            backgroundColor: 'transparent',
            '& div':{
                color:props.color
            },
            '&:hover':{
                backgroundColor: '#f6f6f6'
            }
           

        },
        onlyText:{
            border:'none',
            backgroundColor: 'transparent',
            leftPadding: 8,
            rightPadding: 8,
            '& div':{
                color:props.color
            },
            '&:hover':{
                backgroundColor: '#f6f6f6'
            }

        }


    })

    const classes = useStyles()

    function clickHandler(){
        props.onClick()
    }
    
    return <button 
                className = {clsx(classes.container,{[classes.outlined]:props.outlined,[classes.onlyText]:props.onlyText})
                }>
            <div 
            className = {classes.text} onClick={props.onClick? clickHandler:null} >
            {props.text.toUpperCase()}
        </div>
    </button>
}

export default Button