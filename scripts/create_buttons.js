var fs = require('fs');
var files = fs.readdirSync('../assets/audio/karaoke');
console.out(files)

<button type="button" 
        className="btn btn-default" 
        onClick="invoke" 
        name='gotoNode' 
        data-arg1='1234'>GotoNode</button>
On javascript layer:

  invoke = (event) => {
    let nameOfFunction = this[event.target.name];
    let arg1 = event.target.getAttribute('data-arg1');
    //We can add more args as needed...
    window[nameOfFunction](arg1) 
    //hope function is in window. 
    //Else the respective object need to be used 
    })
  }