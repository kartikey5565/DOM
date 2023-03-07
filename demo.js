// console.dir(document.title);
// document.title = 123;
// console.dir(document.title)
// console.log(document.head);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms[0])




// console.log(document.getElementById("header-title"))
// console.log(document.getElementById('header-title'));
// document.getElementById('header-title').textContent="Hi";
// var headerMain=document.getElementById('main-header');

// console.log(document.getElementById('header-title'));
// var headerTital=document.getElementById('header-title');
// headerTital.innerHTML='<h4>hello zuber</h4>';
 //Q-3) Make the title have a black border as the youtuber does
// headerMain.style.borderBottom='solid 3px #000'

//Q-3) Now make ADD ITEM bold and chage the font color to greeen
// let items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor='green';
//=============================================================================
//Task-4) getElementbyClassname
//Make the 3 rd element in the list have green background color.
// let classItems=document.getElementsByClassName('list-group-item');
// console.log(classItems);

// classItems[2].style.backgroundColor="green";

//Make all the elements in the list have bold color font.
// for(let i=0; i<classItems.length; i++){
//     classItems[i].style.fontWeight="bold";
// }
//==========================================================================
//Task-5) getElementByTagName ;
//try editing it with getelementsbyclassname:
// for(let i=0; i<classItems.length; i++){
//     classItems[i].style.backgroundColor='#f4f4f4';
// }

//then by getelementbytagname
// let li=document.getElementsByTagName('li');
// // console.log(li);
// for(let i=0; i<li.length; i++){
//     li[i].style.fontWeight='bold';
//     li[i].style.color='red';
// }
//=========================================================
//Task-6) QuerySelector && QuerySelectorAll ;
//Deliverable:
//1) Make the 2nd item have green background color:
let secItem=document.querySelector(".list-group-item:nth-child(2)");
// secItem.style.backgroundColor='green';

// 2) Make the 3rd item invisible:
let thirdItem=document.querySelector(".list-group-item:nth-child(3)");
// thirdItem.style.display='none';

//Deliverable:
// 1) Using QuerySelectorALL change the font color to green for 2nd item in the item list
let secItems=document.querySelectorAll('li:nth-child(2)');
//item 2 wil be invisible becouse font color and background color both are same.
// secItem.style.color='green';

// 2) Choose all the odd elements and make their background green using QuerySelectorALL
let odd=document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}
// Task-7-------
//Traversing the DOM:
let itemList=document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="#ccc";
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

//childNode:
// console.log(itemList.childNodes);

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstChild
// console.log(itemList.firstChild);
//firstElementChild:
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

//lastChild
// console.log(itemList.lastChild);
//lastElementChild:
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

//nextSibLing:
console.log(itemList.nextSibling);
//nextElemntSibLing:
console.log(itemList.nextElementSibling);

//previousSibling:
console.log(itemList.previousSibling);
//previousElementSibling:
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//create a Element:

// create a div;
let newDiv= document.createElement('div');
//add a class
newDiv.className='Hello';
//add a id
newDiv.id='hello1';

//add attributes
newDiv.setAttribute('tital','hello');

//create text node
let newDivText=document.createTextNode('Hello World');

//add text to div
newDiv.append(newDivText);


let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');

console.log(newDiv);

// 1) add HEllo word before Item Lister:
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';

//2) add HEllo word before Item 1
let div2=document.createElement('div');
let div2Text=document.createTextNode('Hello');
div2.append(div2Text);
console.log(div2);
let container2=document.querySelector('div .list-group');
let li=document.querySelector('div .list-group-item');

container2.insertBefore(div2,li);

//=======================================================================