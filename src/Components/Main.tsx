import React, { useState } from 'react'
import Form from './Form'
import Load from './Load';

export default function Main() {
  var [user,setUser]=useState<string[]>([]);
  var pass=(e:string)=>{
    setUser([...user,e]);
  }
  var pass2=(e:string)=>{
    var checker=user.filter((data)=>data!==e);
    setUser(checker);
  }
    return (
    <div>
      <Form pass={pass}/>
       {
        user.map((e)=>(
         <div>
            <Load another={e} pass2={pass2}/>
         </div>   
        ))
       } 
        
    </div>
  )
}

