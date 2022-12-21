import React from "react"
import Store from "./components/Store"
import {About} from "./components/About"





function App() {

   <Routes>
    <Route path="/"element={<NavWrapper/>}>
    <Route path="/home"element={<Home/>}/>
    <Route path="/store"element={<Store/>}/>
    <Route path="/about"element={<About/>}/>
    </Route>
   </Routes>
  
}
function NavWrapper(){
        <>
        <nav style={{display:"flex",gap:"1rem"}}>
        <link to="/home">Home</link>
        <link to="/store">Store</link>
        <link to="/about">About</link>
        </nav>
        </>
    
}
export default App
