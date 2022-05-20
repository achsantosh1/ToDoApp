import React from 'react'

const Todolist =(props)=>{
   
    return (
        <>
            <li style={{marginBottom:20}}>{props.text}<button onClick={()=>{
                props.onSelect(props.id)
            }} style={{padding:"0px 16px"}}> - </button></li>
            
        </>
    )
}
export default Todolist;