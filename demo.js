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