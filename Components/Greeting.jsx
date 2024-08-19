import React from "react";

const theGreeting  = function greeting(){
    const time = new Date().getHours();
    if(time >= 0 && time < 12){
        return "Good morining";
    }
  
    if (time >= 12 && time < 18){
        return "Good Afternoon"; 
    }
  
    if(time >= 18 && time <= 23){
        return "Good evening"; 
    }
  }



  export default theGreeting; 