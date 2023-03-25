// document.getElementById('add-frm').addEventListener('submit', addNote);
// function addNote(e){
//     e.preventDefault();
//     console.log('Hello');
// }
var form = document.getElementById('add-fm');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var tableDiv = document.getElementById('tb1-div');
var search = document.getElementById('srch');


var noteCount = 0;
var newNote= '';

window.onload = updateTable;

form.addEventListener('submit' , addNote);
search.addEventListener('keyup' , searchNotes);
items.addEventListener('click' , removeNotes);

function updateTable(){
    if(noteCount>0){
        tableDiv.style.display='';
        items.appendChild(newNote);
    }
    else{
        tableDiv.style.display = 'none';
    }
}

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
        span.className = 'note-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);
        
        var td2 = document.createElement('td');
        td2.className = 'btcellv';
        var btn1 = document.createElement('button');
        btn1.appendChild(document.createTextNode('view'));
        btn1.setAttribute("id",'vw');
        td2.appendChild(btn1);
        console.log(btn1);

        var td3 = document.createElement('td');
        td3.className = 'btcelld';
        var btn2 = document.createElement('button');
        btn2.setAttribute("id",'del');
        btn2.appendChild(document.createTextNode('Delete'));
        td3.appendChild(btn2);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        noteCount++;

        newNote = tr;

        updateTable();


    }
}

function searchNotes(e){
    var searchTxt = e.target.value.toLowerCase();
    
    var list = items.getElementsByClassName('item');

    var listArr = Array.from(list);
    listArr.forEach(function(item){
        var noteTitle = item.firstChild.textContent;
        console.log(noteTitle);

        if(noteTitle.toLowerCase().indexOf(searchTxt) != -1){
            item.style.display= '';

        }
        else{
            item.style.display = 'none';
        }

    });
}


