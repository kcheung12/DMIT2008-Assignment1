import Router from "../../routes/router";
import todoItem from "../todoItem/todoItem2";
import editlogo from "../../icon/editlogo";
import trashlogo from "../../icon/trashlogo";
import { getStore } from "../../redux/store";

const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}
const bgColor = function () {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

const todoList = function(){
    
    

    const content = document.createElement('div')
    content.classList.add('category-list')

    const data = getStore()
    const elements = data.map(cat=>todoItem(bgColor(),editlogo,trashlogo, cat))
    elements.forEach(element => {
        content.append(element);
    })
    const edit = content.querySelector('a')
    edit.addEventListener('click',onRequestNewPage)
    
    
    // data.forEach(cat => {
        
    //     const headDiv = document.createElement('div')
    //     headDiv.classList.add('itemList')
    //     const colorDiv = document.createElement('div')
    //     colorDiv.classList.add('colorDiv')
    //     function random_bg_color() {
    //         var x = Math.floor(Math.random() * 256);
    //         var y = Math.floor(Math.random() * 256);
    //         var z = Math.floor(Math.random() * 256);
    //         var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    //         colorDiv.style.background = bgColor;
    //         }
        
    //     random_bg_color();
    //     headDiv.append(colorDiv)
    //     content.append(headDiv)
    //     const catDiv = document.createElement('div')
    //     catDiv.classList.add('catDiv')
    //     const elem = todoItem(cat)
    //     catDiv.append(elem)
        

    //     const functionDiv = document.createElement('div')
    //     functionDiv.classList.add('function-div')
    //     const edit = link(editlogo, '/edit','edit-button')
    //     edit.addEventListener('click',onRequestNewPage)
    //     functionDiv.append(edit)
    //     const del = link(trashlogo, '/delete','delete-button')
    //     del.addEventListener('click',onRequestNewPage)
    //     functionDiv.append(del)
    //     catDiv.append(functionDiv)
    //     headDiv.append(catDiv)
    // });

    


    return content
}

export default todoList     