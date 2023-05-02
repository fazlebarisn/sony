import React from "react";

function Sidebar(){

    const asideStyle = {
        background: "red",
    }

    return (
        <aside
            style={asideStyle} 
            className="sidebar-component">
            <h1>Hello from sidebar!</h1>
        </aside>
    )
}

export default Sidebar;