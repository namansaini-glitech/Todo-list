import React from 'react';

const Comp = (props) => {


    return (
        <>
            <div className = "todo_style"> 

            <h3 className = "icon" onClick = {() => {
            props.onSelect(props.id);
            }} > X </h3>
            
            <li> {props.text} </li>
            </div>
        </>
    
    );
};

export default Comp;