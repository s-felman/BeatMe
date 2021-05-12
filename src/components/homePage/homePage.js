import React from "react";
import NavBar from "../navBar/navBar";
import SlideShow from "../slideShow/slideShow";
import ShowList from "../displayList/showList"

const HomePage = () => {
    return (
        <div>
<div>
       <NavBar></NavBar>
</div> 
<div>
    <SlideShow></SlideShow>
</div>
<div>
    <ShowList></ShowList>
</div>
    
   </div>    
   
)}

export default HomePage