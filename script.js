const ticket= new Promise((resolve, reject) => {
      const isBoarded=true;
      if(isBoarded){
            resolve("You are not in the flight");
      }
      else{
            reject("Your flight has been cenceled");
      }
      
});
ticket
      .then((data)=>{
            console.log("wohoo",data);
      })
      .catch((data)=>{
            console.log("oh no",data);
      })
      .finally(()=>{
            console.log("flight is over");

      })