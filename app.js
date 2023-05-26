import React from "react";
import  ReactDOM  from "react-dom/client";
const Title=()=>{
   return( <h1>Title</h1>)
}
const Header=()=>{
    return(
      <div>
        <Title/>
        <div className="head">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
  
      </div>
    );y
  }
  const Body= ()=>{
   
  }
  const Footer= ()=>{
   
  }
  
  const AppLayout =()=>{
    return(<React.Fragment>
      <Header/>
      <Body/>
      <Footer/>
      
    </React.Fragment>)
  }
  



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)