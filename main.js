// document.getElementById('add-frm').addEventListener('submit', addNote);
// function addNote(e){
//     e.preventDefault();
//     console.log('Hello');
// }
var form = document.getElementById('add-fm');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');

form.addEventListener('submit' , addNote);

function addNote(e){
    e.preventDefault();

    if(ntitle.value == '' || nbody.value == ''){
        alert("Please fill all fields");

    }
    else{
        var tr = document.createElement('tr');
        tr.className = 'item';

        var td1 =document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
        var span = document.createElement('span');
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);
        
        var td2 = document.createElement('td');
        td2.className = 'btcellv';
        var btn1 = document.createElement('button');
        btn1.setAttribute("id",'vw');
        btn1.appendChild(document.createTextNode('view'));
        td2.appendChild(btn1);

        var td3 = document.createElement('td');
        td2.className = 'btcelld';
        var btn2 = document.createElement('button');
        btn2.setAttribute("id",'del');
        btn2.appendChild(document.createTextNode('Delet'));
        td3.appendChild(btn2);

        console.log(td3);

    }
}