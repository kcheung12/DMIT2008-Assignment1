import Router from "../../routes/router"
import dataFetcher from "../../utils/dataFertcher";
import todoItem from "../todoItem/todoItem";
import render from "../../utils/render";
import link from "../link";
import editlogo from "../../icon/editlogo";
import trashlogo from "../../icon/trashlogo";


const onRequestNewPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path)
}

const todoList = async function(){

    const content = document.createElement('div')
    content.classList.add('category-list')

    const data = await dataFetcher('https://raw.githubusercontent.com/kcheung12/DMIT2008-Assignment1/main/src/js/data/todos.json')
    data.forEach(cat => {
        
        const headDiv = document.createElement('div')
        headDiv.classList.add('itemList')
        const colorDiv = document.createElement('div')
        colorDiv.classList.add('colorDiv')
        function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            colorDiv.style.background = bgColor;
            }
        
        random_bg_color();
        headDiv.append(colorDiv)
        content.append(headDiv)
        const catDiv = document.createElement('div')
        catDiv.classList.add('catDiv')
        const elem = render(todoItem,cat)
        catDiv.append(elem)
        

        const functionDiv = document.createElement('div')
        functionDiv.classList.add('function-div')
        const edit = link(editlogo, '/pageNotFound','edit-button')
        edit.addEventListener('click',onRequestNewPage)
        functionDiv.append(edit)
        const del = link(trashlogo, '/pageNotFound','edit-button')
        del.addEventListener('click',onRequestNewPage)
        functionDiv.append(del)
        catDiv.append(functionDiv)
        headDiv.append(catDiv)
    });

    


    return content
}

export default todoList     