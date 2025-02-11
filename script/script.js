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
/*function typeWriter(e, command, speed, output, index) {
  if (i < command.length) {
    e.innerHTML += command.charAt(i);
    i++;
    setTimeout(typeWriter, speed, e, command, speed, output, index);
  }
  else {//after  the command is typed, print the output, and call back the original function to loop
    e.innerHTML += "<br>" + output + "<br><br>"
    cmdList = command.split(' ')
    if (cmdList[0] === 'clear'){
      $("#term-text")[0].innerHTML = ''//remove everything
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
    e = $("#term-text")[0]

    //e.innerHTML += "<span style='color:#12a10d'>┌──(</span><span style='color:#3a78ff'>glenn㉿DESKTOP-github</span><span style='color:#12a10d'>)-[</span>"+path+"<span style='color:#12a10d'>]</span><span style='color:#12a10d'><br>└─</span><span style='color:#3a78ff'>$</span> "
    typeWriter(e, command[0], 125, command[1], index)
}


//list of commands, and their outputs to display on the mock terminal
commandloop = [
  [
    "whoami","glenn"
  ],
  [
    "ls","languages.txt  portfolio.txt  tools.txt"
  ],
  [
    "cat portfolio.txt","Self-Driving Car, Mathdocs, glennedstrom.github.io,  Y-86 Processor"
  ],
  [
    "cat languages.txt", "Python, C/C++, Bash, x86 Assembly, RegEx, Lua, Java, SQL, JavaScript, HTML/CSS"
  ],
  [
    "cat tools.txt","Vim, Git, Linux, Wireshark, Anaconda, Google Cloud Platform, VS Code"
  ],
  [
    "clear", ""
  ]
]

//recursive function to loop through the commands and print
function termloop(index=0) {
    term = $("#term-text")[0]
    command(commandloop[index], index)
}

termloop();*/

  document.addEventListener('DOMContentLoaded', function() {
      const navbar = document.querySelector('.navbar');
      const navLinks = document.querySelectorAll('.nav-link');
      const sections = document.querySelectorAll('section, div.container');
      
      // Handle scroll events for navbar appearance
      function handleScroll() {
          if (window.scrollY > 50) {
              navbar.classList.add('nav-scrolled');
              navbar.classList.remove('nav-transparent');
          } else {
              navbar.classList.remove('nav-scrolled');
              navbar.classList.add('nav-transparent');
          }
      }
      
      // Handle active link updates
      function updateActiveLink() {
          let currentSection = '';
          
          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              if (window.scrollY >= (sectionTop - 150)) {
                  currentSection = section.getAttribute('id');
              }
          });
          
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href').slice(1) === currentSection) {
                  link.classList.add('active');
              }
          });
      }
      
      // Add event listeners
      window.addEventListener('scroll', () => {
          handleScroll();
          updateActiveLink();
      });
      
      // Initial call to set correct state
      handleScroll();
      updateActiveLink();
  });

