/* When the button displayed in the browser is clicked, the following should happen:

1.) the background colour of the page changes to  #BADA55
2.) an H1 is created and added to the page that contains the text ‘Thanks for a fun semester!”
3.) The button text changes to clicked 
4.) Good luck on your final exam is removed from the page. 

*/

function changeBg() {
    document.body.style.background = '#BADA55';
    var h1 = document.createElement("H1");
    var tx = document.createTextNode("Thanks for a fun semester!");
    h1.appendChild(tx);
    document.body.appendChild(h1);
    var p = document.getElementById("para");
    p.remove();
}

let btn = document.querySelector('.change');

function change() {
    if (btn.className === 'on') {
        btn.textContent = 'clicked';
        btn.className = "change";
    } else {
        btn.textContent = 'Click Me!';
        btn.className = "on";
    }
}
btn.addEventListener('click', change);