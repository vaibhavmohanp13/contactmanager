import React from 'react'

export default props => {
  return (
    <div>
      <h1 className="dispplay-4">About Contact Manager</h1>
      {props.match.params.id}
      <p className="lead">Simple app to manage Contact</p>
      <p className="text-secondary">version 1.0.0</p>
    </div>
  )
}
