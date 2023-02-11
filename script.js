const addForm = document.querySelector('.add');
const ulClick = document.querySelector('.tasks');
const clearAll = document.querySelector('.clear');
const message = document.querySelector('.message span');
const searchItems = document.querySelector('.search');

function updateMessage(){
    const linkLength = ulClick.children.length;
    message.textContent = `You have ${linkLength} pending tasks`;
}

addForm.addEventListener('submit',function(event){
event.preventDefault();
const formValTrim = addForm.task.value.trim();
if(formValTrim.length){
    ulClick.innerHTML += `<li><span>${formValTrim}</span>
    <i class="bi bi-trash delete"></i></li>`;

}else{
    console.log('nothing to show')
}
addForm.reset();
updateMessage();
});
ulClick.addEventListener('click',function(event){
    if(event.target.classList.contains('delete')){

event.target.parentElement.remove();
    }else{
        console.log('Nothing')
    }
    updateMessage();
});


clearAll.addEventListener('click',function(){
   const allLinks = ulClick.querySelectorAll('li');
   allLinks.forEach(function(ele){
    ele.remove();
   })
   updateMessage();
})

function makeSearch(item){
    const linksArray = Array.from(ulClick.children);
    const filterItems = linksArray.filter(function(ele){
        
return !(ele.textContent.toLowerCase().includes(item));
    }).forEach(ele =>{
        ele.classList.add('hide');
    })
    Array.from(ulClick.children).filter(ele => {
        return ele.textContent.toLowerCase().includes(item);
    }).forEach(ele => {
        ele.classList.remove('hide');
    })
    
}

searchItems.addEventListener('keyup',function(event){
const searchedVal = (searchItems.inpSearch.value).toLowerCase().trim();
makeSearch(searchedVal);
})

searchItems.addEventListener('click', event => {
    if(event.target.classList.contains('reset')){
searchItems.reset();
const searchedVal = (searchItems.inpSearch.value).trim();
makeSearch(searchedVal);
    }
})