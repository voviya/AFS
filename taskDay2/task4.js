const databasesharing = () => {
    console.log("Data stored successfully");
  };

  const sendEmailNotification = () => {
    console.log("Email notification sent");
  };

  function submitform(formMsg, dbs, notify) {
    setTimeout(() => {
      dbs(); 
      notify(); 
      console.log(formMsg);
    }, 5000);
  }

  submitform("Form submitted successfully", databasesharing, sendEmailNotification);


  //adding two numbers
 calculate=(a,b,callback)=>{
    console.log("Adding of two numbers..");
    console.log(a+b);
    setTimeout(()=>{
        callback();
    },2000);
}
greetings=()=>{
    console.log("Thus task completed successfully.....");
}
calculate(3,4,greetings);