//let headerTitle =  document.getElementById('header-title');
//console.log(headerTitle);
//let header =document.getElementById('main-header')
// headerTitle.textContent = "hello" voa ne go ferma styleto
// headerTitle.innerText = 'goodbye' voa go ferma styleto

//headerTitle.innerHTML = '<h2> Hello</h2>'

//header.style.borderBottom = 'solid 3px black';
//get elemetnt by class name
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = "hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.background = 'pink';

// for (let i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// } 


//get elements by tag name
// let li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = "hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.background = 'pink';

// for (let i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// } 


//querySelector

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value ='Vnesi predmet';

// let submit =  document.querySelector('input[type = "submit"');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let Lastitem = document.querySelector('.list-group-item:last-child');

// Lastitem.style.color = "red";

// let secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = 'blue';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


//dom

//let itemList = document.querySelector('#items');
// //prarentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//prarentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);

//child node
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[2].style.backgroundColor = ' pink';

// console.log(itemList.firstChild);

// //first element child 
//  console.log(itemList.firstElementChild);
//  itemList.firstElementChild.textContent = 'Hello';

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello';

// //next sibling

// console.log(itemList.nextElementSibling);

// //prev 
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color ="blue";

//creatElement

//Creat Div

// let newDiv = document.createElement('div');
// newDiv.className = 'hey';

// newDiv.id ='hello';

// newDiv.setAttribute('title',  'Hello Div');

// let divText = document.createTextNode('Hello Miki');
// newDiv.appendChild(divText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


//let btn =document.getElementById('button');
//btn.addEventListener('click', btnClick);
// btn.addEventListener('mouseover', btnClick);


// function btnClick(e){
// //     document.getElementById('header-title').textContent = "WOW smeni se ";
// // document.querySelector('#main').style.background = '#f4f4f4';
// // console.log(e);
// // console.log(e.target.id);
// // console.log(e.target);
// // console.log(e.target.className);
// // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

// }

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

//itemInput.addEventListener('keydown', runEvent);


//function runEvent(e){

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = ''
//}

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


// submit event 

form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//addItem function

function addItem(e){
    e.preventDefault();

    //get input value
    let newItem = document.getElementById('item').value;
    
    //create new element
    let li = document.createElement('li');

    //add class
    li.className = 'list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //creat delete btn el
     let  btn = document.createElement('button');

     //add class
     btn.className = 'btn btn-danger btn-sm float-right delete';

     // text nde
     btn.appendChild(document.createTextNode('X'));


     li.appendChild(btn);

    itemList.appendChild(li);
}

//delete item
function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('are you sure ?')){
            let li =e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


//filter event 

function filterItems(e){
    //convert to lowercase
    let txt = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(txt) != -1){
            item.style.display ='block';
        }
        else{
            item.style.display = 'none';
        }
    });
}