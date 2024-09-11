import React from 'react'

function TButton(props) {


    return <>
        <button {...props}>{props.children}</button>
    </>
}

export default TButton


