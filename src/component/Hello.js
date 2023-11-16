import React from "react";

function Hello({color, name}){
    return <div style={{color}}> {name}</div>
}

Hello.defaultProps = {
    name : '나는 리액트맨이다'
}

export default Hello