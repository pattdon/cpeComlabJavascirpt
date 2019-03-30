function add() {
    // get the current value of the input field
    var val = document.querySelector('#textName').value;
    
    if((val !== undefined) && (val !== "")) {
      // val exists and non empty
      
      // get the list of numbers. It's a <ul>
      var ul = document.querySelector("#textSend");
       
      ul.innerHTML += "<li>"+"Name : "+ val + "</li>";
    }

    var wel = document.querySelector('#textEmail').value;

    if((wel !== undefined) && (wel !== "")) {
        // val exists and non empty
        
        // get the list of numbers. It's a <ul>
        var ul = document.querySelector("#textSend");
         
        ul.innerHTML += "<li>" +"Email : "+ wel + "</li>";
      }

    var wel = document.querySelector('#textContact').value;

    if((wel !== undefined) && (wel !== "")) {
        // val exists and non empty
        
        // get the list of numbers. It's a <ul>
        var ul = document.querySelector("#textSend");
         
        ul.innerHTML += "<li>" +"contact : "+ wel + "</li>";
    }

    var wel = document.querySelector('#textMessage').value;

    if((wel !== undefined) && (wel !== "")) {
        // val exists and non empty
        
        // get the list of numbers. It's a <ul>
        var ul = document.querySelector("#textSend");
         
        ul.innerHTML += "<li>" +"Message : "+ wel + "</li>";
    }
}
  
  function reset() {
    document.querySelector("#textSend").innerHTML = "";
  }