import React from "react"; 


function styled (greeting){
    if (theGreeting == "Good morining"){
        return "red";
    }
    if (theGreeting == "Good Afternoon"){
        return "green";
    }
    if (theGreeting == "Good evening"){
        return "blue";
    }
  }
  
  
  const styledColor = styled(greeting); 