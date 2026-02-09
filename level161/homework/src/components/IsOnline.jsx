import React from 'react'

export default function IsOnline({status}) {
  return (
    <>
      <p>User is {status ? 'Online' : 'Offline'}</p>
    </>
  )
}
