import React, { ChangeEvent, FormEvent, useState } from 'react'
type himel={
    pass:(e:string)=>void;
}
export default function Form(props:himel) {
  var [user,setUser]=useState<any>([]);
  var two=(e:ChangeEvent<HTMLInputElement>)=>{
    setUser(e.target.value);
    
  }  
  var one=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    props.pass(user);
    setUser("");
  }
  
  
  return (
    <div>
      <form action="#" onSubmit={one}>
    <div>
        <label htmlFor="text">Enter Todo:</label>
        <input type="text"onChange={two} value={user}/>
    </div>
    <button>Submit</button>
      </form>
    </div>
  )
}
