import {useState}from "react"
import {AdminData}from "./AdminData"


function Home() {
    const[isAdmin,setIsAdmin]=useState(false)
  return (
    <>
   <h1>Home</h1>
   <button onClick={()=>{
    import("../sum").then(module=>{
        module.sum(2,2)
    })
   alert(sum(2,2))}}>
   Add 2+2</button>
   <br/>
   <br/>
   <button onClick={()=>setIsAdmin(prev=>!prev)}>Toggle Admin</button>
   {isAdmin?<AdminData/>:<h2>Not Admin</h2>}
   </>
  )
}
export default Home
