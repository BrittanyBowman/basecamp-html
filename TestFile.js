
var infoAboutJamesBond = {
    firstName:"James",
    lastName:"Bond",
    hobby: "Murder"
  };
 
  function IwasNeverHere (object){
    for(var x in object){
      object[x] = 'redacted';
    }
  }
  
  IwasNeverHere(infoAboutJamesBond);

  //New Section

  