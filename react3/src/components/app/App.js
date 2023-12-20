import { useState } from "react";
import AddUser from "../addUser/AddUser";
const  App = ()=> {
  const [users, setUsers]=useState([])
  console.log('komponentas rodo')
  console.log('is app komponento', users)
  const HandleInputChange = (e)=>{
    e.preventDefault()
    setUsers((prevData)=>{
      return[e.target.value,...prevData]
    })
  }
  return (
    <div>
      <AddUser onSave={HandleInputChange}/>
     <h1>app komponentas</h1>

    </div>
  );
}

export default App;

