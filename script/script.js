// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

var i = 0
var path = "~/resume"

//text typing simulation
function typeWriter(e, command, speed, output, index) {
  if (i < command.length) {
    e.innerHTML += command.charAt(i);
    i++;
    setTimeout(typeWriter, speed, e, command, speed, output, index);
  }
  else {//after  the command is typed, print the output, and call back the original function to loop
    e.innerHTML += "<br>" + output + "<br>"
    cmdList = command.split(' ')
    if (cmdList[0] === 'clear'){
      $("#term")[0].innerHTML = ''//remove everything
    }
    e.innerHTML += "<span style='color:#12a10d'>┌──(</span><span style='color:#3a78ff'>glenn㉿DESKTOP-github</span><span style='color:#12a10d'>)-[</span>"+path+"<span style='color:#12a10d'>]</span><span style='color:#12a10d'><br>└─</span><span style='color:#3a78ff'>$</span> "
    index += 1
    if (index === commandloop.length){
      //return
      index = 0
    }
    i = 0
    setTimeout(termloop, 1500, index)

  }
}

// linux command and current directory
function command(command, index){
    e = document.getElementById('term')

    //e.innerHTML += "<span style='color:#12a10d'>┌──(</span><span style='color:#3a78ff'>glenn㉿DESKTOP-github</span><span style='color:#12a10d'>)-[</span>"+path+"<span style='color:#12a10d'>]</span><span style='color:#12a10d'><br>└─</span><span style='color:#3a78ff'>$</span> "
    typeWriter(e, command[0], 125, command[1], index)

}


//list of commands, and their outputs to display on the mock terminal
commandloop = [
  [
    "whoami","glenn<br>"
  ],
  [
    "ls","languages.txt  portfolio.txt  tools.txt<br>"
  ],
  [
    "cat languages.txt","Python Bash C++ Java JavaScript HTML CSS Lua<br>"
  ],
  [
    "cat portfolio.txt","Mathdocs glennedstrom.github.io Hardware<br>"
  ],
  [
    "cat tools.txt","Bash Vim jQuery Flask Regex<br>"
  ],
  [
    "clear", ""
  ]
]

//recursive function to loop through the commands and print
function termloop(index=0) {
    term = document.getElementById('term')
    command(commandloop[index], index)
}


$(function(){
    $('#age').text("Age: " + Math.floor( (Date.now() - 1033516800000)/31540000000 ));
    termloop()
})
