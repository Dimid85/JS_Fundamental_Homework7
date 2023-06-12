//завдання 1
/*let newWindow = window.open("", "", "width=300,height=300");
setTimeout(() => newWindow.resizeTo(500, 500), 2000);
setTimeout(() => newWindow.moveTo(200, 200), 4000);
setTimeout(() => newWindow.close(),6000);*/



//завдання 2

/*function changeCSS() {
        const paragraph = document.getElementById('text');
        paragraph.style.color = 'orange';
        paragraph.style.fontSize = '20px';
        paragraph.style.fontFamily = 'Comic Sans MS';
     }
     
     const button = document.querySelector('button');
     button.addEventListener('click', changeCSS);*/

//завдання 3

/*const clickButton1 = document.querySelector(".btn1");
const clickButton2 = document.querySelector(".btn2");
const clickButton3 = document.querySelector(".btn3");
const hoverLink = document.querySelector(".link");


function changeButton1() { 
        document.body.style.background = "blue";
}
function changeButton2() { 
        document.body.style.background = "pink";
}
function changeButton3() { 
        document.body.style.background = "brown";
}
function changeButton3White() { 
        document.body.style.background = "white";
}
function changeLinkYellow() { 
        document.body.style.background = "yellow";
}
function changeLinkWhitew() { 
        document.body.style.background = "white";
}
clickButton1.addEventListener('click', changeButton1);
clickButton2.addEventListener('dblclick', changeButton2);
clickButton3.addEventListener('mousedown', changeButton3);
clickButton3.addEventListener('mouseup', changeButton3White);
hoverLink.addEventListener('mouseover', changeLinkYellow);
hoverLink.addEventListener('mouseout', changeLinkWhitew);*/

//завдання 4

/*const listOptions = document.querySelector(".list");
const deteteBtn = document.querySelector(".btn");

deteteBtn.addEventListener('click', function() {
  const selectedOption = listOptions.options[listOptions.selectedIndex];
  listOptions.removeChild(selectedOption);
});*/

//завдання 5

/*const btn = document.querySelector(".btn");
const textarea = document.querySelector(".textarea");
const events = [];

function btnClick() { 
    events.push("I was pressed!!");
    updateTextarea();
}

function btnHoverOn() { 
    events.push("Mouse on me!!");
    updateTextarea();
}

function btnHoverOff() { 
    events.push("Mouse not on me!!");
    updateTextarea();
}

function updateTextarea() {
    textarea.innerHTML = events.join("<br>");
}

btn.addEventListener('click', btnClick);
btn.addEventListener('mouseover', btnHoverOn);
btn.addEventListener('mouseout', btnHoverOff);*/