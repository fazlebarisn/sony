import React from "react";

function Header(props){
    return(
        <h1>Hello there {props.name} you are {props.age} years old</h1>
    ) 
}

export default Header;