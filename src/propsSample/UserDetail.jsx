import React from 'react'

function UserDetail(props) {

  return <>
    <h1>Name: {props.name}</h1>
    <hr />
    <h3>EMail: {props.email}</h3>
    <h3>Address: {props.address}</h3>
    <h3>Country: {props.country}</h3>
  </>
}

export default UserDetail