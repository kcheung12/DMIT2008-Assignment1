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
        const div = document.createElement('div')
        div.classList.add('itemList')
        const elem = render(todoItem,cat)
        div.append(elem)
        content.append(div)

        const functionDiv = document.createElement('div')
        functionDiv.classList.add('function-div')
        const edit = link(editlogo, '/pageNotFound','edit-button')
        edit.addEventListener('click',onRequestNewPage)
        functionDiv.append(edit)
        const del = link(trashlogo, '/pageNotFound','edit-button')
        del.addEventListener('click',onRequestNewPage)
        functionDiv.append(del)
        content.append(functionDiv)
    });

    


    return content
}

export default todoList     