import React from 'react'
type just={
    pass2:(e:string)=>void;
    another:string
}

export default function Load(props:just) {
  return (
    <div>
      <h1>{props.another}</h1>
      <button onClick={()=>{props.pass2(props.another)}} >Delete</button>
    </div>
  )
}
